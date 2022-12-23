const express = require('express');
const router = express.Router();







const assignmentController=require("../controllers/assignmentController")
router.post("/createAuthor", assignmentController.createAuthor  )
router.post("/createBookDetails", assignmentController.createBookDetails  )
router.get("/findBook", assignmentController.findBook  )
router.post("/updatePrice", assignmentController.updatePrice  )

router.get("/bookInRange", assignmentController.bookInRange  )
module.exports = router;