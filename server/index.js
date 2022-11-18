const express = require('express');
const path = require('path');
const compression = require('compression');
const { addABowl, getAllBowls } = require('../db/index.js')

const app = express();

app.use(express.json());
app.use(compression());

app.use(express.static(path.join(__dirname, '../client/public')));

app.post('/addbowl', (req, res) => {

  addABowl(req.body, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.get('/getall', (req, res) => {
  getAllBowls((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})



const port = 3000;
app.listen(port);
console.log(`listening at localhost : ${port}`);
