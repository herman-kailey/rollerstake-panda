const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for item object: { id: string, name: string, isComplete: boolean }
const itemSchema = new Schema({
    id: { //note: mongodb will assign an auto generated _id by default, but since an id is explicitly generated 
          //      in createTodoStore.createItem(), we can assume this is a client generated id
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false //note: can be set retroactively by createTodoStore.setItemName() so not required upfront
    },
    isComplete: {
        type: Boolean,
        required: false, //note: createTodoStore.createItem() does not specify a isComplete value
        default: false, //note: logically todo tasks should be marked !isComplete by default
    }
});

const Item = mongoose.model('item', itemSchema);
module.exports = Item;