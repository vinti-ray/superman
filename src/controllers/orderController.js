const orderModel=require("../models/orderModule")
const productModel=require('../models/productModel')
const userModel=require("../models/userModel")


const createOrderData=async function(req,res){
    let data=req.body
    let idONe=data['productId']
    let productValidate=await productModel.findById(idONe)
    if(!productValidate)    res.send({msg:"please enter a valid productID"})

   let idTwo=data['userId']
    let userValidate=await userModel.findById(idTwo)
    if(!userValidate)    res.send({msg:"please enter a valid userId"})


    let isFreeAppUser=req.body['isFreeAppUser']
    console.log(isFreeAppUser) 
    let balanceOfUser=userValidate.balance
    let priceOfproduct=productValidate.price    
    let amount =data.amount
    let cost= priceOfproduct*amount 
          
    if(!isFreeAppUser){
        req.body.amount=0
        let savedData= await orderModel.create(req.body)
         res.send({msg: savedData})}   else{


         if(balanceOfUser>priceOfproduct){
            let update= await userModel.findByIdAndUpdate(idTwo,{$set:{balance:(balanceOfUser-priceOfproduct)}},{new:true})
            req.body.amount=priceOfproduct
         let savedData= await orderModel.create(data)
         res.send({msg: savedData})}else{
            res.send("the user doesn't have enough balance")
         }
         }
        }



module.exports.createOrderData=createOrderData     


//For paid user app and the user has sufficient balance. We deduct the balance from user's balance and update the user. We create an order document

// For paid app user and the user has insufficient balance. We send an error that the user doesn't have enough balance

// - //Scenario 3
// For free app user, we dont check user's balance and create the order with 0 amount.