const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authMW=require("../middleware/auth")


router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end 
router.get("/users/:userId",authMW.checkToken, userController.getUserData)

router.put("/users/:userId",authMW.checkToken, userController.updateUser)

router.put("/deleteUsers/:userId",authMW.checkToken, userController.deleteData)

module.exports = router;