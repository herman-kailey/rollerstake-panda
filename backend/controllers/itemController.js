const createError = require('http-errors');
const mongoose = require('mongoose');

const Item = require('../models/item');

module.exports = {
    getAllItems: async (req, res, next) => {
        try {
            const results = await Item.find();
            res.send(results);
        } catch (error) {
            console.log(error.message);
        }
    },

    createItem: async (req, res, next) => {
        try {
            const item = new Item(req.body);
            const result = await item.save();
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error.name === 'ValidationError') {
                next(createError(422, error.message));
                return;
            }
            next(error);
        }
    },


    updateItem: async (req, res, next) => {
        try {
            const id = req.params.id;
            const updatedItem = req.body;
            const options = { new: true }; //so we can return the modified document

            const result = await Item.findByIdAndUpdate(id, updatedItem, options);
            if (!result) {
                throw createError(404, 'Item does not exist');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(createError(400, 'Invalid Item Id')); //in case the user provide an improper id format
            }
            next(error);
        }
    },
    

    deleteItem: async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await Item.findByIdAndDelete(id);
            if (!result) {
                throw createError(404, 'Item does not exist.');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid Item id'));
                return;
            }
            next(error);
        }
    }
};