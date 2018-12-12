// Project uses one of these 3 Node.js frameworks.
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const Block = require('./block');
const Blockchain = require('./blockchain');

const blockchain = new Blockchain();

// The project’s API service is configured to run on port 8000.
app.listen(8000, () => console.log('Listening on port 8000...'));

// The default URL should remain private facing using localhost for connectivity (example: http://localhost:8000).
app.get('/', (req, res) => res.status(404).json({
  "status": 404,
  "message": "Available endpoints: POST /block or GET /block/{BLOCK_HEIGHT}"
}));

/**
 * The web API contains a GET endpoint that responds to a request using a URL path with a block height parameter or properly handles an error if the height parameter is out of bounds.
 * The response for the endpoint provides a block object in JSON format.
 * URL: http://localhost:8000/block/0
 */
app.get('/block/:height', async (req, res) => {
  try {
    const response = await blockchain.getBlock(req.params.height);
    res.send(response);
  } catch (error) {
    res.status(404).json({
      "status": 404,
      "message": "The height parameter is out of bounds."
    })
  }
})

/**
 * The web API contains a POST endpoint that allows posting a new block with the data payload option to add data to the block body.
 * Block body should support a string of text.
 * URL: http://localhost:8000/block
 * The response for the endpoint is a block object in JSON format.
 */
app.post('/block', async (req, res) => {
  if (req.body.body === '' || req.body.body === undefined) {
    res.status(400).json({
      "status": 400,
      message: "Please post a new block object with body parameter."
    })
  } else {
  await blockchain.addBlock(new Block(req.body.body))
  const height = await blockchain.getBlockHeight()
  const response = await blockchain.getBlock(height)
  res.status(201).send(response)
  }
})
