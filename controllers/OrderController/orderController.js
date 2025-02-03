const Order = require("../../Models/Orders");
const Restaurant = require("../../Models/Restaurants");
const MenuItem = require("../../Models/MenuItems");

// Place a new order (Authenticated users only)
const placeOrder = async (req, res) => {
  try {
    const { restaurantId, items } = req.body;
    const userId = req.user.id;

    let totalPrice = 0;
    const orderItems = [];

    for (let item of items) {
      const menuItem = await MenuItem.findById(item.menuItem);
      if (!menuItem) return res.status(404).json({ error: "Menu item not found" });
      totalPrice += menuItem.price * item.quantity;
      orderItems.push({ menuItem: menuItem._id, quantity: item.quantity });
    }

    const order = new Order({ user: userId, restaurant: restaurantId, items: orderItems, totalPrice });
    await order.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// View order details
const getOrderDetails = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", "name email")
      .populate("restaurant", "name location")
      .populate("items.menuItem", "name price");

    if (!order) return res.status(404).json({ error: "Order not found" });
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update order status (Admin only)
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });

    order.status = status;
    await order.save();
    res.status(200).json({ message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { placeOrder, getOrderDetails, updateOrderStatus };