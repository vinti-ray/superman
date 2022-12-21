const publishersModel=require('../models/publishersModel')
const createPublisher=async function(req,res){
    let data=req.body
    let creation = await publishersModel.create(data)
    res.send({msg:creation})
}


const getDataOfPublisher=async function(req,res){
    let getData=await publishersModel.find()
    res.send({msg:getData})
}

module.exports.createPublisher=createPublisher
module.exports.getDataOfPublisher=getDataOfPublisher