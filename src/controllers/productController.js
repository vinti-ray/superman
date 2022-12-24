const productModel=require('../models/productModel')
const createProduct= async function(req,res){
    let data= req.body
    const createData= await productModel.create(data)
    res.send({msg:createData})
}

module.exports.createProduct=createProduct