const userModel=require("../models/userModel")

const createData=async function(req,res){

    
    
    let data=req.body 
    
    const createUser=await userModel.create(data)
    res.send({msg:createUser}) 
}

module.exports.createUser=createData 