const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const address=require("./middlewares/assignmentMiddleware")
const moment=require('moment')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://vintiray:7091201680@cluster0.ahtxrqr.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );
app.use(
    function(req,res,next){
        console.log(req.path)   //or use console.log(req.originalUrl)
        next()
    }
)


app.use( function(req, res,next) {
    const ipAddress = req.socket.remoteAddress;
    console.log(ipAddress);
    next()
});


app.use(function(req, res,next){
   let a= new Date().toISOString().
  replace(/T/, ' ').      // replace T with a space
  replace(/\..+/, '')     // delete the dot and everything after
  console.log(a)
    next()
})
app.use(
    function(req,res,next){
        console.log(moment().format('YYYY-MM-DD hh:mm:ss'),req.socket.remoteAddress,req.path)
        next()
    }
)



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
