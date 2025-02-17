const MenuItem = require('../../Models/MenuItems');
const Restaurant = require('../../Models/Restaurants');

// Add a menu item to a restaurant (Admin only)
const addMenuItem = async (req, res) => {
    try {
        const { name, price } = req.body;
        const restaurantId = req.params.id;

        // Check if restaurant exists
        const restaurant = await Restaurant.findById(restaurantId);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        // Create new menu item
        const newMenuItem = new MenuItem({ name, price, restaurant: restaurantId });
        await newMenuItem.save();

        // Add menu item to restaurant's menu list
        restaurant.menuItems.push(newMenuItem._id);
        await restaurant.save();

        return res.status(201).json({ message: 'Menu item added successfully', menuItem: newMenuItem });
    } catch (error) {
        return res.status(500).json({ message: 'Error adding menu item', error: error.message });
    }
};

// Get all menu items of a restaurant
const getMenuItems = async (req, res) => {
    try {
        const restaurantId = req.params.id;

        // Find menu items linked to this restaurant
        const menuItems = await MenuItem.find({ restaurant: restaurantId });

        if (!menuItems.length) {
            return res.status(404).json({ message: 'No menu items found for this restaurant' });
        }

        return res.status(200).json(menuItems);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching menu items', error: error.message });
    }
};

module.exports = { addMenuItem, getMenuItems };
