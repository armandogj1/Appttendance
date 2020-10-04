const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const readNames = require('../gsheets/readNames.js');
const addAttendance = require('../gsheets/addAttendance.js');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist')));

// endpoint for getting the names
app.get('/names', async (req, res) => {

  try {
    const names = await readNames();
    res.send(names);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// endpoint to post to spreadsheet
app.post('/attendance', async (req, res) => {
  try {
    const saved = await addAttendance(req.body.day, req.body.students);
    res.send(saved);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

});

app.listen(process.env.PORT, () => console.log('listening on port... ', process.env.PORT));