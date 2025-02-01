const mongoose=require('mongoose');
const { type } = require('os');
const usershema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
type:String,
required:true,
unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    role:{
type:String,
enum:['customer','admin'],
default:'user',
    }
})
module.exports=mongoose.model('user',usershema);