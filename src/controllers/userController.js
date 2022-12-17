const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}
let four=async function(req,res){
    let two=req.body
    let data=await UserModel.create(two)
    res.send({data:data})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const five=async function(req,res){
    let allUser=await userModel.find({lastName:"ray"})
    res.send({msg : allUser})
}



module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.four=four
module.exports.five=five
// const userModel = require('../models/userModel')
// const createData=async function(req,res){
//     let data=req.body
//     req.send({data})
// }
// module.exports.createUser=createData