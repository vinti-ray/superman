const mongoose=require('mongoose')
const moment = require('moment')
// const Date=moment().format('YYYY-MM-DD')
const customerSchema= new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobileNumber:{
        type:String,
        maxLength:10, 
        minLength:10
    },  
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
