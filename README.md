# RESTful Web API with Node.js Framework

In Project 2: Private Blockchain, you solved the challenge of how to persist our blockchain dataset. Your next challenge is to build a RESTful API using a Node.js framework that will interfaces with the private blockchain.

By configuring an API for your private blockchain you expose functionality that can be consumed by several types of web clients ranging from desktop, mobile, and IoT devices. For your next project, you will be creating a RESTful web API for your private blockchain. The API project will require two endpoints:
```
GET block
POST block
```

## Select Node.js framework

For your first web service project, you get to select your preferred Node.js framework from the list below:
```
Hapi.js
Express.js
Sails.js
```

### Not sure which one to select?

If you need help selecting a framework, refer to the Lesson: Web Services with Node.js where we quickly overview qualities for each of the Node.js framework.

Additionally, review their framework resources for creating API endpoints with GET/POST and see which one you enjoy working with the most.

## Configure API Service

Imagine you are working with legacy system and have been told the appropriate port to open channels of communication is port 800. Configure your API service accordingly.

URL
```
http://localhost:800/block
```

## Configure two endpoints

You are tasked to create two endpoints which will allow your application to accept user requests. In this section, we’ll provide resources on how to do so effectively.
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

### Validation
When posting to localhost:8000/block without any content on the payload, your service should not create a block. Be sure to validate if there is content in the block before creating and adding it to the chain.
