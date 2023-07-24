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
            await item.save();
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
            const filter = { id: `${req.params.id}`};
            const updatedItem = req.body;
            //note: Normally it is best to avoid updateOne/findbyidandXYZ and instead use item.find().save()
            //but in this case we do not have any schema validation to worry about as those functions
            //will skip any schema validation.
            await Item.updateOne(filter, updatedItem);
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
            //can not use findByIDAndDelete because we are using our custom id
            await Item.deleteOne({ id: `${req.params.id}`})
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