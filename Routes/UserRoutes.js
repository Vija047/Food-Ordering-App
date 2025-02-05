const express = require("express");

const  { registerUser}  = require("../controllers/User_controller/Users_Register");
const  {loginUser }=require('../controllers/User_controller/Login');


const router = express.Router();

router.post("/Register",registerUser);
router.post("/Login",loginUser );
module.exports = router;