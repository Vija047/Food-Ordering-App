const express = require("express");
// const { body, validationResult } = require("express-validator");
const  { registerUser}  = require("../controllers/User_controller/Users_Register");
const  {login}=require('../controllers/User_controller/Login');


const router = express.Router();

// Validation Middleware
// const userValidationRules = [
//   body("name").notEmpty().withMessage("Name is required"),
//   body("email").isEmail().withMessage("Enter a valid email"),
//   body("password")
//     .isLength({ min: 6 })
//     .withMessage("Password must be at least 6 characters long"),
//   body("role")
//     .optional()
//     .isIn(["customer", "admin"])
//     .withMessage("Role must be either customer or admin"),
// ];

// Route with validation middleware
// router.post("/register",userValidationRules,async(req,res)=>{
// try{
//   const errors=validationResult(req);
//   if(!errors.isEmpty()){
//     return res.status(400).json({errors:errors.array()});
//   }
//   await registerUser(req,res);

// }catch(error){
//   console.error("Error in user registration:",error);
//   res.status(500).json({error:"Internal Server Error"});
// }
// });

router.post("/Register",registerUser);
router.post("/Login",login);
module.exports = router;