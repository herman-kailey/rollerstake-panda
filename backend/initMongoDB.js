const mongoose = require('mongoose');

module.exports = () => {

    //Init our mongoose connection
    mongoose.connect(process.env.MONGO_URI, {dbName: process.env.DB_NAME})
        .then(() => {
            console.log('Mongodb connected....'); //on successful connection
        })
        .catch(err => console.log(err.message)); //on failed connection
  
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to db...');
    });
  
    mongoose.connection.on('error', err => {
        console.log(err.message);
    });
  
    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose connection is disconnected...');
    });
};