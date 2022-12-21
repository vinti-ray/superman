const mongoose = require('mongoose');

const publishersSchema = new mongoose.Schema( {
    name:String,
    headQuarter:String
    
})
module.exports=mongoose.model('LibraryPublisher',publishersSchema)