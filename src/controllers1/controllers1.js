const books=require('../models1/userModles1')
const createData=async function(req,res){
    let dataBody=req.body;
    let savedData=await books.create(dataBody)
    res.send({msg:savedData})
}

const getdata=async function(req,res){
    let allBook=await books.find()
    res.send({msg:allBook})
}
module.exports.createData=createData
module.exports.getdata=getdata


// On similar lines as above(today’s mongodb session APIs), complete this assignment and submit explainer video for the same : Create a bookSchema with bookName, authorName, category and year . Create same 2 api's for books i.e. : 1 api to create a new book and another api to get the list of all books.