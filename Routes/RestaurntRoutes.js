const express = require("express");
const { addRestaurant, getRestaurants, addMenuItem, getMenuItems } = require("../controllers/Restaurant_Menu_Management/RestaurantController");
const authMiddleware = require("../middleware/auth_Resta");

const router = express.Router();

router.post("/admin", authMiddleware, addRestaurant); // Admin only
router.get("/getadmin", getRestaurants);
router.post("/admin:id/menu", authMiddleware, addMenuItem); // Admin only
router.get("/admin:id/menu", getMenuItems);

module.exports = router;