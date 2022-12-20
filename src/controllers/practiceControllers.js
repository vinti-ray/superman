const Practice=require('../models/practiceModel')
const createPractice=async function(req,res){
    let data=req.body
    let SaveData= await Practice.create(data)
    res.send({msg:SaveData})
}
const getData=async function(req,res){
    let data=req.body
    let updateThis=await Practice.findOneAndUpdate(
        {name:"falana"},
        {$set:data},
        {new:true,upsert:true}
    )
    res.send({msg:updateThis})
}
module.exports.createPractice=createPractice
module.exports.fetchData=getData



//skip(n) skips n items in a query, while limit(m) returns only the next m items starting from the n-th one.

//if user want page 4 then i have to skip content before page four ...no after skip describe how many content in a page hence no of slip content should be page-1multiply with content,limit is how many document we want to ssee after skiped 

// $in operator is used to select documents in which the field's value equals any of the given values in the array.

//.find({   $and:  [  {roll:{$gt:5}},  {roll:{$lt:10}}  ]   })  5<roll<10



// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})