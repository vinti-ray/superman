const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

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
        console.log(req.path)   //or use console.log(req.originalUrl)  The req.path property contains the path of the request URL.
        next()
    }
)


app.use( function(req, res,next) {
    const ipAddress = req.socket.remoteAddress;          //127.0.0.1 an inbuilt application programming interface of class Socket which allows you to get information about the request's connection.
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

//moment.js makes it simple to parse, validate, manipulate, and display date/time

app.use('/', route);

 
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
