const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3001; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/postSchedule', (req, res) => {
  const list = [];
  list.push(req.body);
  res.status(200).send(list)
})

app.listen(PORT, () => {
  console.log('Listening to port:', PORT);
});