const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

const publishersController=require("../controllers/publishersModel")



router.post("/createAuthor", authorController.createAuthor  ) 

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createPublisher", publishersController.createPublisher)
router.get("/getPublishersData", publishersController.getDataOfPublisher)

// router.put("/updateData",bookController.updateUsingPut)

module.exports = router; 