const mongoose=require("mongoose");
let practiceModel=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    date:Date,
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
   
    gender:{
        type :String,
        enum:["m","f","o"]
    },
    roll:Number,
    
},{ timestamps:true});
module.exports= mongoose.model('practice',practiceModel)