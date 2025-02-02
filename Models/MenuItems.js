const mongoose=require('mongoose');
const { type } = require('os');
const MenuitemsShema= new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    price:{
        type:Number,
        required:true,
    },
    restaurant:{
        type:String,
        ref:'Restaurant',
        required:true,
    },
});
module.exports=mongoose.model('Menuitems',MenuitemsShema);