const mongoose =require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId
const bookSchema=new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    price:{
        indianPrice:String,
        europeanPrice:String,
    },
    year:{
        type:Number,
        default:2021
    },
    tags:[String],
    authorName:String,
    totalPages:Number,
    stockAvailable:Boolean,
    author_id:{
        type:ObjectId,
        ref:'practice'
    }
},{timestamps:true})
module.exports=mongoose.model("BookCollection",bookSchema)