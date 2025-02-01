const express = require("express");
const { body, validationResult } = require("express-validator");
const { registerUser } = require("../controllers/User_controller/Users_Register");

const router = express.Router();

// Validation Middleware
const userValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Enter a valid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("role")
    .optional()
    .isIn(["customer", "admin"])
    .withMessage("Role must be either customer or admin"),
];

// Route with validation middleware
router.post("/register", userValidationRules, (req, res, next) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  // Call controller function
  registerUser(req, res, next);
});

module.exports = router;
