const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const PORT = 3001;
const saltRounds = 12;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

const list = [];

app.post('/register', (req, res, next) => {
  const { password } = req.body;

  bcrypt.hash(password, saltRounds)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => error)
})

app.get('/getSchedule', (req, res) => {
  res.status(200).send(list)
})

app.post('/postSchedule', (req, res) => {
  list.push(req.body);
  res.sendStatus(200);
})

app.listen(PORT, () => {
  console.log('Listening to port:', PORT);
});