const customerModel=require("../models/projectCustomerModel")
const cardModel=require("../models/projectCardModel")

const createCustomer=async function(req,res){
    let data=req.body
    let createData=await customerModel.create(data) 
    res.send({msg:createData})
}
const fetchData=async function(req,res){
    let findData=await customerModel.find({status:"ACTIVE"})
    res.send({msg:findData})
}

const deleteData= async function(req,res){
    let deleteData=await customerModel.findOneAndUpdate(
        {firstName:"kiya"},
        {isDeleted:true}
    )
    res.send({deleteData})
}

//
const createCard=async function(req,res){
    let data = req.body
    
    let findId=await cardModel.find({}).sort({_id:-1}).limit(1)
   let ab=findId[0].cardNumber
    data.cardNumber=++ab

    let linkId=await customerModel.find({}).sort({_id:-1}).limit(1)
    let abc=linkId[0].customerID
    data.customerID=abc
    
    let createData=await cardModel.create(data)
    res.send({msg:createData})
}
const getData= async function(req,res){
     let getData= await cardModel.find()
     res.send({msg:getData})
}


module.exports.createCustomer=createCustomer
module.exports.createCard=createCard
module.exports.findData=fetchData
module.exports.deleted=deleteData
module.exports.getCard=getData
