const express = require("express");
const router = express.Router();
const menuController = require('../controllers/menuControllers');

// Get all menu items
router.get('/', menuController.getAllMenuItems);

// Post a new menu item
router.post('/', menuController.postMenuItem);

// Delete a menu item
router.delete('/:id', menuController.deleteMenuItem);

// Get a single menu item
router.get('/:id', menuController.singleMenuItem);

// Update a single menu item
router.patch('/:id', menuController.updateMenuItem);

module.exports = router;
