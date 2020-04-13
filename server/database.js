const MongoClient = require('mongodb').MongoClient;

const connect = (url) => {
  const options = {
    useUnifiedTopology: true
  }
  return MongoClient.connect(url, options).then(client => {
    const db = client.db('patooty')
    const collections = {
      schedule: db.collection('schedule'),
      users: db.collection('users'),
    }
    return collections;
  })
}

module.exports = async () => await connect('mongodb://localhost:27017');

