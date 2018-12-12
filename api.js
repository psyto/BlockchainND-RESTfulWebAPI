const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Block = require('./block');
const Blockchain = require('./blockchain');
//const uuid = require('uuid/v1');

//const nodeAddress = uuid().split('-').join('');

const blockchain = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function (req, res) {

});

app.post('/transaction', function (req, res) {

});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});
