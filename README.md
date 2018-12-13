# RESTful Web API with Node.js Framework

In Project 2: Private Blockchain, I solved the challenge of how to persist our blockchain dataset. My next challenge is to build a RESTful API using a Node.js framework that will interfaces with the private blockchain.

By configuring an API for my private blockchain I expose functionality that can be consumed by several types of web clients ranging from desktop, mobile, and IoT devices. For my next project, I will be creating a RESTful web API for my private blockchain. The API project will require two endpoints:
```
GET block
POST block
```

## Select Node.js framework

For my first web service project, I selected Express.js as my preferred Node.js framework from the list below:
```
Hapi.js
Express.js
Sails.js
```

## Configure two endpoints

I created the below two endpoints which will allow my application to accept user requests.
```
GET Block Endpoint
POST Block Endpoint
```

### GET Block Endpoint
Configure a GET request using URL path with a block height parameter. The response for the endpoint should provide block object is JSON format.

URL
```
http://localhost:8000/block/[blockheight]
```

#### Example URL path:
http://localhost:8000/block/0, where '0' is the block height.

#### Response
The response for the endpoint should provide block object is JSON format.

#### Example GET Response
For URL, http://localhost:8000/block/0
```
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8
cache-control: no-cache
content-length: 179
accept-ranges: bytes
Connection: close          
{"hash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3","height":0,"body":"First block in the chain - Genesis block","time":"1530311457","previousBlockHash":""}
```

### POST Block Endpoint
Post a new block with data payload option to add data to the block body. The block body should support a string of text. The response for the endpoint should provide block object in JSON format.

#### Response
The response for the endpoint should provide block object in JSON format.

#### Example POST response
For URL: http://localhost:8000/block
```
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8
cache-control: no-cache
content-length: 238
Connection: close
{"hash":"ffaffeb2330a12397acc069791323783ef1a1c8aab17ccf2d6788cdab0360b90","height":1,"body":"Testing block with test string data","time":"1531764891","previousBlockHash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3"}
```
