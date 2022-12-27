const userModel=require("../models/practiceModel")

const jwt=require("jsonwebtoken")
const post =async function(req,res){
    let data=req.body
    let postData=await userModel.create(data)
    res.send({msg:postData})
}   
const login =async function(req,res){
    let data=req.body
    let emailId=data.emailId
    let password=data.password
    let findData=await userModel.findOne({emailId:emailId,password:password})
    let token =jwt.sign({id:findData._id},"justforpractice",(err)=>{
        if(err)  res.send({})
    })
    console.log(token) 
    res.send({msg:token})
}


const updateFb=async function(req,res){
    let data=req.body.post
    let createpost=await userModel.findById(req.params.userId)
}

module.exports.post=post
module.exports.login=login
