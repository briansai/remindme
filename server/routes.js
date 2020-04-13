const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = (app, db) => {
  app.post('/register', (req, res, next) => {
    const { password } = req.body;
  
    bcrypt.hash(password, saltRounds)
      .then(() => res.sendStatus(200))
      .catch((error) => error)
  })
  
  app.route('/schedule')
    .get((req, res) => {
      db.schedule.findOne(req.query, (err, result) => {
        if (result) {
          return res.status(200).send(result);
        }
        return res.status(500).send(err);  
 
      })
    })
    .post((req, res) => {
      db.schedule.insertOne(req.body, (err, result) => {
        if (result) {
          return res.status(200);
        }
        return res.status(500).send(err);
      })
    })
  
  app.route('/addToSchedule')
    .post((req, res) => {
      const { _id, date, items } = req.body;
      db.schedule.updateOne(
        { _id, "list.date": date },
        { $push: { "list.$.items": items } },
        { upsert: true },
        (err, result) => {
          if (err) {
            db.schedule.updateOne(
              { _id },
              {
                $push: { 
                  "list": {
                    date,
                    items: [items],
                  }
                }
              }
              , (err, result) => {
                if (result) {
                  return res.status(200);
                }
                return res.status(500).send(err);                
            }) 
          }
          return res.status(200);
      })
    })
  return app;
}