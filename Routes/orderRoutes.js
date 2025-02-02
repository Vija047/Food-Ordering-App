const express = require("express");
const { placeOrder, getOrderDetails, updateOrderStatus } = require("../controllers/OrderController/orderController");
const { isAuthenticated } = require("../middleware/User_authorizeRole");
const { isAdmin } = require("../middleware/auth_Resta");

const router = express.Router();

//Place a new order (Authenticated users only)
router.post("/orders", isAuthenticated, placeOrder);

//  Get order details (Authenticated users)
router.get("/orders/:id", isAuthenticated, getOrderDetails);

//  Update order status (Admin only)
router.put("/orders/:id/status", isAuthenticated, isAdmin, updateOrderStatus);

module.exports = router;
