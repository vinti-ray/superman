
const express = require('express');
const app = express();
//qus 1    // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing

  
const findMissingNumber=[1,2,3,5,6,7]
app.get('/sol1', function(req,res){
    let len=findMissingNumber.length+1
      let ViaMath=len*(len+1)/2
    
    const sumViahigh=findMissingNumber.reduce((acc,curr)=>{
        acc=acc+curr
        return acc
    },0)
    const missingNumber=ViaMath-sumViahigh
    console.log(req.query.name)
    res.send({ data: missingNumber  }  )
})
  


//qus 2
   // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing



let anotherQus=[33, 34, 35, 37, 38]
app.get('/sol2', function(req,res){
    const sumViaOrder=anotherQus.reduce((acc,curr)=>{
        acc=acc+curr
        return acc
    },0)
    let n=anotherQus.length+1
    let sumViaMath= n * (anotherQus[0] + anotherQus[(anotherQus.length)-1]) / 2
    const missingNumber=sumViaMath-sumViaOrder
    res.send({data: missingNumber})
})

app.listen(4000, function() {
    console.log('Express app running on port ' + 4000)
});



let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]

   app.post('/players', function (req, res) {
    let reqName=req.body.city
// const search=players.find(a=>a.name==reqName)
console.log(reqName)
    
    res.send(  { data: players , status: true }  )
})





// (n / 2)(first number + last number) = sum,








// var express = require('express')
// The first express is assigned whatever is exported by module express, which in this case happens to be a single function. express is a function, not a reference to a module. Hence on second row you just invoke that function: Yes. You can name it whatever. By convention, you name the function exported by express.js “express”. When you invoke that function, it returns an object. By convention you name that object “app”.

// var app = express()
