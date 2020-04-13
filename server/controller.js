const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const initializeDatabases = require('./database.js')
const routes = require('./routes');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

initializeDatabases()
  .then(dbs => {
    routes(app, dbs).listen(PORT,
      () => console.log('Listening on PORT: 3001'
    ));
  })
  .catch(err => console.log(err));