const express = require('express');
const router = express.Router();
// const one= require('./module')
const logger1=require('../loggerr/logger')
const helper1=require('../util/helper')
const formatter1=require('../validator/formatter')
const lodash=require('lodash')

router.get('/test-me', function (req, res) {
    helper1.dateQus()
    helper1.getBatchInfo("Californium", "W3","D4","Nodejs module")
    logger1.name("vinti")
    formatter1.trim(" functionUp  ")
    formatter1.changetoLowerCase("fUNCTION up")
    formatter1.changetoUpperCase("funCtiOn up")
    console.log(lodash.chunk(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],3));

    console.log(lodash.tail([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]))

    console.log(lodash.union([1,2],[2,3],[1,5],[2,9],[1,9]))
    console.log(lodash.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]))
    res.send('any dummy text')


});


router.get('/test-you', function(req, res){
    // one.buddyData("heeyyyy budddyyyyy")
    // one.nameData("vinti")
    
    // console.log("look there how is going ", one.three)
    res.send("very important text")
})
router.get('/buddy', function (req, res) {
    res.send('npoooooooooooooo')
});


module.exports = router;