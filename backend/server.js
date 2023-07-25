//load in dotenv configs
const dotenv = require('dotenv').config();
const express = require('express');
const createError = require('http-errors');

//init express server
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
//app.use(express.text()) NOTE: the frontend requires that our API use text/plain content-type
//                              but it wouldnt make sense for it to give us a JSON.stringify(body)
//                              as plain text so it's better to change the frontend headers than
//                              make our backend messy by trying to use a hybrid of plain/text and json 


//init mongodb/mongoose connection
require('./initMongoDB.js')();

//set up routes
const itemRouter = require('./routes/itemRouter');
server.use('/api', itemRouter);

//handle 404 errors
server.use((req, res, next) => {
    next(createError(404, 'Not found'));
});

//Error handler
server.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
});