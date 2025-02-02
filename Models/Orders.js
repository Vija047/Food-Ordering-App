const mongoose=require('mongoose');
const { type } = require('os');
const OrderShema=new mongoose.Schema({
    menuitem:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'menuitem',
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:1
    },
    price:{
        type:Number,
        required:true,
        min:0,
    },
});
const orderShema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Restaurant',
        required:true,
    },
    items:{
        type:[orderShema],
    required:true,
    },
    Totalprice:{
        type:Number,
        required:true,
        min:0,
    },
    status:{
        type:String,
        required:true,
        enum: ["Pending", "Completed", "Cancelled"],
        default: "Pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },

});

module.exports=mongoose.model('orders',orderShema);