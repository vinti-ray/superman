const express = require('express');
const router = express.Router();






//assignment
const userControllerNew=require("../controllers/userControllerone")
const middOne=require("../middlewares/assignmentMiddleware")
const productController=require("../controllers/productController")
const orderController=require("../controllers/orderController")

 
router.post("/createUser", middOne.middAssignment,userControllerNew.createUser)
router.post("/createProduct",productController.createProduct)
router.post("/createOrderData",middOne.middAssignment, orderController.createOrderData)
 
 
//for practice purpose










module.exports = router;  