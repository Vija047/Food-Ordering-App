const Order=require("../../Models/Orders");
const menuitem=require('../../Models/MenuItems');
const Restaurant=require('../../Models/Restaurants');
const placeOrder = async (req, res) => {
  try {
    const { restaurantId, items } = req.body;
    const userId = req.user._id;
    // Authenticated user

    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });

    let totalPrice = 0;
    const orderItems = [];

    // Validate menu items and calculate total price
    for (let item of items) {
      const menuItem = await MenuItem.findById(item.menuItem);
      if (!menuItem) return res.status(404).json({ error: "Menu item not found" });

      totalPrice += menuItem.price * item.quantity;
      orderItems.push({ menuItem: menuItem._id, quantity: item.quantity });
    }

    // Create order
    const order = new Order({
      user: userId,
      restaurant: restaurantId,
      items: orderItems,
      totalPrice,
    });

    await order.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

//  Get Order Details
const getOrderDetails = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", "name email")
      .populate("restaurant", "name location")
      .populate("items.menuItem", "name price");

    if (!order) return res.status(404).json({ error: "Order not found" });

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

// Update Order Status (Admin only)
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["Pending", "Preparing", "Completed", "Cancelled"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });

    order.status = status;
    await order.save();

    res.status(200).json({ message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

module.exports = { placeOrder, getOrderDetails, updateOrderStatus };
