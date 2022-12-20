const authorDetails=require('../models/authorNameModel')
const bookDetails= require('../models/bookNameModel')

let createAuthor = async function(req,res){
    let data=req.body
    let createData=await authorDetails.create(data)
    res.send({msg:createData})
}

let createBookDetails= async function(req,res){
    let data=req.body
    let createData=await bookDetails.create(data)
    res.send({msg:createData})
}

let findBook=async function(req,res){
    let authorName= await authorDetails.findOne({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
    
    let findbook= await bookDetails.find(authorName)
    console.log(authorName)
    res.send({msg:findbook})
}

let updatePrice=async function(req,res){
    let findUpdate= await bookDetails.findOneAndUpdate(
        {name:"Two states"},
        {$set:{price:100}},
        {new:true}
    )

    let id=findUpdate.author_id
    let authorName=await authorDetails.findOne({author_id:id}).select({
        author_name:1,_id:0})
    console.log(id)
    
    let price=findUpdate.price
        res.send({authorName,price})

}

let bookInRange=async function(req,res){
    
       let bookPrice= (await bookDetails.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0}))

    let id=[]
        for (let i = 0; i < bookPrice.length; i++) {
        let did = bookPrice[i]["author_id"]
        id.push(did)
            }
let out=[]
for (let i = 0; i < id.length; i++) {
    let authorName=await authorDetails.findOne({author_id:id[i]}).select({
        author_name:1,_id:0})
    
    out.push(authorName)
}
                          
res.send({msg:out})

}

module.exports.createAuthor=createAuthor
module.exports.createBookDetails=createBookDetails
module.exports.findBook=findBook
module.exports.updatePrice=updatePrice
module.exports.bookInRange=bookInRange

