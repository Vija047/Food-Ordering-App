const mongoose=require('mongoose');
const { type } = require('os');

//separate shema for menuitems
const menuitemsshema=({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
})

const Restaurntshema= new mongoose.Schema({   
      name:{
        type:String,
        required:true,
      },
    location:{
        type:String,
        required:true,
    },
    menuitems:{
        type:[menuitemsshema],//here we are using array of menu
        required:true,
    },


});
module.exports=mongoose.model('restaurant',Restaurntshema);