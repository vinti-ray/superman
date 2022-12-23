const userModel=require("../models/userModel")

const createData=async function(req,res){
    // req.header.isFreeAppUser=true
    // req.headers.year=678
    // res.header("year", "2022")
    // res.header("year", "2022")
    
    
    let data=req.body 
    data.isFreeAppUser=req.headers.isFreeAppUser
    const createUser=await userModel.create(data)
    res.send({msg:createUser}) 
}

module.exports.createUser=createData 