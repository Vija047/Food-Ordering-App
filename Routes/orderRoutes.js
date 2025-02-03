const express = require("express");
const { placeOrder, getOrderDetails, updateOrderStatus } = require("../controllers/OrderController/orderController");
const authMiddleware = require("../middleware/auth_Resta");

const router = express.Router();

router.post("/orders", authMiddleware, placeOrder);
router.get("/orders/:id", authMiddleware, getOrderDetails);
router.put("/orders/:id/status", authMiddleware, updateOrderStatus); // Admin only

module.exports = router;