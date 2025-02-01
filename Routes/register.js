const express = require("express");
const User = require("../Models/Menu_items_Module"); // Capitalized model name for convention
const bcrypt = require("bcrypt"); // Fixed spelling from 'bycrypt' to 'bcrypt'
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already registered" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role
        });

        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error", details: error.message });
    }
});

module.exports = router;
