const Restaurant = require("../../Models/Restaurants");
const MenuItem = require("../../Models/MenuItems");

// Add a new restaurant (Admin only)
const addRestaurant = async (req, res) => {
  try {
    const { name, location, cuisine, address } = req.body;
const exitingresturant=await Restaurant.findOne({name,address});
if(exitingresturant){
  return res.status(400).json({message:"Restaurant already exists at this address. Choose another place."});

}
    const restaurant = new Restaurant({ name, location, cuisine, address });
await restaurant.save();
    res.status(201).json({ message: "Restaurant added successfully", restaurant });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch list of restaurants
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json({ restaurants });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a menu item (Admin only)
const addMenuItem = async (req, res) => {
  try {
    const { name, price } = req.body;
const exitingmenu=await MenuItem.findOne({name});
if(exitingmenu){
  return res.status(400).json({message:"This item is already exit in the menuitems "});
}
    const restaurantId = req.params.id;
    const menuItem = new MenuItem({ name, price, restaurant: restaurantId });
    await menuItem.save();
    res.status(201).json({ message: "Menu item added successfully", menuItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch menu items for a restaurant
const getMenuItems = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const menuItems = await MenuItem.find({ restaurant: restaurantId });
    res.status(200).json({ menuItems });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addRestaurant, getRestaurants, addMenuItem, getMenuItems };