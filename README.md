# SMS-microserviceESA
An SMS microservice which facilitates basic SMS services. Developed for CS474 Enterprise Software Architecture(ESA) Assignment at Mahindra Ecole Centrale - Mahindra University

This microservice is deployed on heroku at https://sms-microservice-pranayb.herokuapp.com/

## Technologies used
Node.js <br />
ExpressJS <br />
Database: MongoDB

## Lisence
 This project is licensed under the Apache License 2.0.
 A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
 <p align="center"> Copyright (c) 2021 Pranay Bandaru. All rights reserved.</p>

## Instructions to setup
Run the commands below in a terminal in the project directory.
```bash

$ npm install
$ npm install mongoose
$ npm install express
$ npm install express-rate-limit
$ npm install memory-cache
```
or simply 

```bash
$ npm install
$ npm install package.json
```

The project includes the connection string to my MongoDB database. To use your own database create a database in your MongoDB cluster and obtain a connection string. 
Use this connection string in place if mine in the server.js file.
Incase you want to use your own database create a mongoDB cluster and replace the connection string in the db.js file.

To run the service run the below command in a terminal in the project directory.
```bash
$ node server.js
```

### Testing the APIs
- The basic unit tests written  for all the controller functions can be run by using the following command:
```bash
$ npm run test
```
- Can also be tested on postman using the Heroku URL or a local address

###### Note
A key named ```app-secret``` must be passed with the value ```Bearer 1234567890``` in the headers for each request for successful authorization.

## APIs and their behavior
### SMS Microservice
#### Post an inbound SMS
This API will be exposed to the client.

- Method – POST
- Route – ```http://localhost:3000/inbound/sms```

This will create an inbound SMS.

- Example request body:
```bash
{
    "from": "1234567890",
    "to": "123456",
    "text": "hello, STOP\n"
}
```

- Example successful response:
```bash
{
    "message": "inbound sms is ok",
    "error": ""
}
```

- For unsuccessful responses, refer to ```Design Specifications.pdf``` document. The responses this app gives exactly syncs with those.

#### Post an outbound SMS
This API will be exposed to the client.

- Method – POST
- Route – ```http://localhost:3000/outbound/sms```

This will create an inbound SMS.

- Example request body:
```bash
{
    "from": "1234567890",
    "to": "123456",
    "text": "test"
}
```

- Example successful response when the user is blocked (comparisions done with cache):
```bash
{
    "message": "",
    "error": "sms from 1234567890 to 123456 is blocked by STOP request"
}
```

- Example successful response when the user is not blocked:
```bash
{
    "message": "outbound sms is ok",
    "error": ""
}
```

- For unsuccessful responses, refer to ```Design Specifications.pdf``` document. The responses this app gives exactly syncs with those.

#### Default response
This will be the default response for all other methods and configurations

Status Code - 405 
```bash
{
    "message": "Method Not Allowed"
}
```






