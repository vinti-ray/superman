const userModel=require("../models/userModel")
let moment=require('moment')


const createData=async function(req,res){

    
    
    let data=req.body 
    
    const createUser=await userModel.create(data)
    res.send({msg:createUser}) 
}



//practice will delete later
const practice=async function(req,res){
    let data=req.param.name
    let fiter=req.query

    let a=moment().isLeapYear(2000)
    console.log(a)
    const findData=await (await userModel.find())
    res.send({msg:findData})
} 
 
module.exports.createUser=createData 
module.exports.practice=practice  