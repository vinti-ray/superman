const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publishersModel=require('../models/publishersModel')

const createBook= async function (req, res) {
    let book = req.body
    let id=book["author_id"]
    let idTwo=book["publisher_id"]
    
    
    if(!book["author_id"])   return res.send({msg:"this detail is required"})

     const idPresence=await authorModel.findById(id)
    if(!idPresence)  return res.send({status:false,msg:"the author is not present"})
     
    if(!book["publisher_id"])   return res.send({msg:"this detail is required"})


    const idPresencePublisher=await publishersModel.findById(idTwo)
    if(!idPresencePublisher)  return res.send({status:false,msg:"the publisher is not present"})


        let bookCreated = await bookModel.create(book)
         res.send({data: bookCreated})
  
} 

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// } 

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find({"name": "Revolution 2020"}).populate('author_id').populate('publisher_id')
    res.send({data: specificBook})


}

// For the books published by 'Penguin' and 'HarperCollins', update this key to true.


 const updateUsingPut=async function(req,res){
    // a)  For the books published by 'Penguin' and 'HarperCollins', update this key to true.
    let getPublishersId=await publishersModel.find({name:{$in:['penguin','HarperCollins']}})
    const publishersId=getPublishersId.map(a=>a._id)

       let updateData= await bookModel.updateMany(
        {publisher_id:{$in:publishersId}},
        {$set:{isHardCover:true}}
        
       )


       
        //  b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)

    let findAuthor =await authorModel.find({rating:{$gt:3.5}})
    const authorsId=findAuthor.map(a=>a._id)
    console.log(findAuthor)

    const updatePrice=await bookModel.updateMany(
        {author_id:{$in:authorsId}},
        {$inc:{"price":10}})

           res.send({msg:updateData}) 
         
 }

module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateUsingPut=updateUsingPut
