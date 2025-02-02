const Restaurant = require("../../Models/Restaurants");

// Add a new restaurant (Admin only)
const addRestaurant = async (req, res) => {
  try {
    const { name, location, cuisine } = req.body;

    const newRestaurant = new Restaurant({ name, location, cuisine });
    await newRestaurant.save();

    res.status(201).json({ message: "Restaurant added successfully", restaurant: newRestaurant });
  } catch (error) {
    console.error("Error adding restaurant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fetch list of restaurants
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addRestaurant, getRestaurants };