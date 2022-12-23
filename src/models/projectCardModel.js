const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const cardCollection =new mongoose.Schema({
    cardNumber:String,  
    cardType:{
        type:String, 
        enum:["REGULAR","SPECIAL"]

    },
    customerName:String,
    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"],
        default:"ACTIVE",
    }, 
    vision:String,
    customerID:{
        type:ObjectId,
        ref:'CustomerCollection'
    }    
})

module.exports=mongoose.model("cardCollection",cardCollection)

   