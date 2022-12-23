const express = require('express');
const router = express.Router();


const bookController=require("../controllers1/controllers1")






//todays assignment
router.post("/createBook", bookController.createData)


router.get("/getBooks", bookController.getdata)

module.exports = router;