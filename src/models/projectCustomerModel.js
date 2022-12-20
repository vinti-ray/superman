const mongoose=require('mongoose')
const customerSchema= new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobileNumber:String,
    DOB:Date,
    emailID:String,
    address:String,
    customerID:{
        type:String,
        unique:true
    },
    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"]
    },
    isDeleted:Boolean
})




module.exports=mongoose.model("CustomerCollection",customerSchema)
