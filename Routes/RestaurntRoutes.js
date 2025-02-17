const express = require('express');
const { addRestaurant, getRestaurants } = require('../controllers/Restaurant_Menu_Management/RestaurantController');
const { addMenuItem, getMenuItems } = require('../controllers/Restaurant_Menu_Management/Menucontroller');
const { authenticate, authorizeAdmin } = require('../middleware/auth_Resta'); // Ensure this path is correct

const router = express.Router();

// Restaurant Routes
router.post('/admin', authenticate, authorizeAdmin, addRestaurant); // Add a new restaurant (Admin only)
router.get('/get', getRestaurants); // Get list of restaurants

// Menu Routes
router.post('/:id/menu', authenticate, authorizeAdmin, addMenuItem); // Add a menu item (Admin only)
router.get('/getmenu/:id', getMenuItems); // Fetch menu items of a restaurant

module.exports = router;
