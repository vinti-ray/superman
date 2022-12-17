// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users



// // String, Number
// // Boolean, Object/json, array

// const { Timestamp } = require("bson");
// const mongoose = require("mongoose");
// const { boolean } = require("webidl-conversions");
// const userSchema=new mongoose.Schema({
//     firstName:String,
//     lastName:String,
//     age:Number,
//     mobile:{
//         type:Number,
//         required:true,
//         unique:true
//     },
//     emailId:String,
//     gender:{
//         type:String,
//         enum:['male','female','others']
//     },
//     isIndian:Boolean,
//     cars:['A','B','C','D'],

// }, {timestamps:true});
// module.exports=mongoose.model('Users', userSchema)
// mongoose.set('strictQuery', true);
// const mongoose = require('mongoose');
// const userSchema = new mongoose.Schema({
//     firstName:String,
//     lstName:String,
//     mobile:{
//         type:Number,
//         required:true,
    
//     }
// },{timestamps:true});
// module.exports=mongoose.model("User", userSchema)