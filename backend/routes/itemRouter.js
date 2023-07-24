const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

//get a list of all saved items
router.get('/', itemController.getAllItems);

//Post a new item to the table
router.post('/', itemController.createItem);

//Update the item with the matching id
router.put('/:id', itemController.updateItem);

//Delete the item with the matching id
router.delete('/:id', itemController.deleteItem);

module.exports = router;