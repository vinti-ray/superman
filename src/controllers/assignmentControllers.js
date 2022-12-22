const bookModel=require('../models/bookModel')
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
} 

const getData=async function(req,res){
    res.send({msg:"hello"})
}
module.exports.createBook=createBook
module.exports.getData=getData