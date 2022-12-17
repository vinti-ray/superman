const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookController=require("../controllers1/controllers1")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/one",UserController.four)
router.get("/getData", UserController.five)

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
//todays assignment
router.post("/createBook", bookController.createData)


router.get("/getBooks", bookController.getdata)

module.exports = router;