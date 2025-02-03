const express = require("express");

const  { registerUser}  = require("../controllers/User_controller/Users_Register");
const  {login}=require('../controllers/User_controller/Login');


const router = express.Router();

router.post("/Register",registerUser);
router.post("/Login",login);
module.exports = router;