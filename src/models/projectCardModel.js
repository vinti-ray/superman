const mongoose=require('mongoose')
const cardCollection =new mongoose.Schema({
    cardNumber:String,  
    cardType:{type:String, 
    enum:["REGULAR","SPECIAL"]

    },
    customerName:String,
    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"],
        default:"ACTIVE",
    }, 
    vision:String,
    customerID:String    
})

module.exports=mongoose.model("cardCollection",cardCollection)

   