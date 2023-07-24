const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for item object: [{ id: string, name: string, isComplete: boolean }]
const itemSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: Number,
        required: true
    },
    isComplete: {
        type: Boolean,
        required: true
    }
});

const Item = mongoose.model('item', itemSchema);
module.exports = Item;