const mongoose = require('mongoose');
const objectId=mongoose.Schema.Types.ObjectId
const orderSchema= new mongoose.Schema({
    userId:{
     type:objectId,
     ref:'UserDocument'
    },

    productId:{
        type:objectId,
        ref:'productCollection'
    },

    amount:Number,
    isFreeAppUser:{
        type :Boolean
      
    },
    date:String
})
module.exports=mongoose.model('orderCollection',orderSchema)
