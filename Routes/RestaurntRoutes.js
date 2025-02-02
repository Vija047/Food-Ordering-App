const express=require('express');
const { addRestaurant, getRestaurants } = require('../controllers/Restaurant_Menu_Management/RestaurantController');
const{isAdmin}=require('../middleware/auth_Resta');
const router = express.Router();

// Add a new restaurant (Admin only)
router.post('/restaurants', isAdmin, addRestaurant);

// Fetch list of restaurants
router.get('/restaurants', getRestaurants);

module.exports = router;