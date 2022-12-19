const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
const practiceController=require("../controllers/practiceControllers")

const bookController=require("../controllers/assignmenControllers")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.post("/practice",practiceController.createPractice)
router.get("/fetchData", practiceController.fetchData)



router.post("/saveBook", bookController.createBook)
router.get("/bookList", bookController.bookList)
router.get("/getBooksInYear", bookController.getBooksInYear)
router.get("/getParticularBooks", bookController.getParticularBooks)
router.get("/getXINRBooks", bookController.getXINRBooks)
router.get("/getRandomBooks", bookController.getRandomBooks)



module.exports = router;   