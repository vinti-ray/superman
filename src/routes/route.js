const express = require('express');
const router = express.Router();
const bookController=require("../controllers/assignmenControllers");
const { Router } = require('express');

//assignment
router.post("/saveBook", bookController.createBook)
router.get("/bookList", bookController.bookList)
router.get("/getBooksInYear", bookController.getBooksInYear)
router.get("/getParticularBooks", bookController.getParticularBooks)
router.get("/getXINRBooks", bookController.getXINRBooks)    
router.get("/getRandomBooks", bookController.getRandomBooks)




//project
const customerControler=require("../controllers/projectController")
const middWare=require("../middlewares/middlewares")

router.post("/createCustomer",middWare.validateEmail,customerControler.createCustomer)
router.post("/createCard",customerControler.createCard)
router.get("/findData",customerControler.findData)  
router.post("/deleted",customerControler.deleted) 
router.get("/getCard",customerControler.getCard)


 
     
 


module.exports = router;   