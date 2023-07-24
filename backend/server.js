//load in dotenv configs
const dotenv = require('dotenv').config();
const express = require('express');
const createError = require('http-errors');

//init express server
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//init mongo database
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
    console.log('Server started on port ' + PORT + '...');
});