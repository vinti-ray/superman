const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');
const { functions } = require('underscore');


// router.get("/profile-details", function(req, res){
//     // Write the LOGIC here
//     res.send('dummy response')
// })

// router.get('/test-me', function (req, res) {
//     console.log("email from introduction module", intro.myEmail)
//     intro.myFunction('Sabiha')
//     console.log("email from employee module", employee.myEmail)

//     const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//     let result = _.first(days, 4)
//     console.log(`Result from underscore function is ${result}`)
//     console.log(`The mentor of the day is ${mentorModule.mentor}`)

//     res.send('any dummy text from route handler 1')
// });


// router.get('/test-me', function(req, res){
//     console.log("I am here")
//     res.send("any dummy text from route handler 2")
// })

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })



//qus 1
// Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.
let movies =['Captain America: The First Avenger ','Captain Marvel ','Iron Man ','The Avengers','Thor: The Dark World ']
router.get('/movies', function(req, res){
            
            res.send(movies)

})

//qus 2
// Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api

router.get('/movies/:indexNumber',function(req,res){
    
    for(let i=0;i<movies.length;i++){
        if(req.params.indexNumber==i){
            res.send(movies[i])
 

//3rd qus
// Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message.

    
        }else if(req.params.indexNumber>movies.length){
        
        res.send("enter valid index number")
    }
}
}
)   


//4th qus
// Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 

// Return the entire array in this api’s response
const filmsList= [ {
    id: 1,
    name: 'The Shining'
   }, {
    id: 2,
    name: 'Incendies'
   }, {
    id: 3,
    name: 'Rang de Basanti'
   }, {
    id: 4,
    name: 'Finding Nemo'
   }]

router.get('/films', function (req, res){

       res.send(filmsList)

      
})

//5th 
// Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
// {
//  “id”: 3,
//  “name”: “Rang de Basanti”
// }
// Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’

router.get('/films/:filmId', function(req,res){
for(let i=0;i<filmsList.length;i++){
    if(req.params.filmId==filmsList[i]["id"]){
        res.send(filmsList[i])
    }else if(req.params.filmId>filmsList.length){
       res.send('No movie exists with this id')
    }

    }
}
)

//qus 1    // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
 // Your route code will look like this
//  app.get("/sol1", function (req, res) {
//     //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
//     let arr= [1,2,3,5,6,7]
//     let missingNumber

//     ///LOGIC WILL GO HERE 
//     res.send(  { data: missingNumber  }  );
// });

// const findMissingNumber=[1,2,3,5,6,7,8,9]
// app.get('/sol1', function(req,res){
//     let len=findMissingNumber.length+1
//       let ViaMath=len*(len+1)/2
    
//     const sumViahigh=findMissingNumber.reduce((acc,curr)=>{
//         acc=acc+curr
//         return acc
//     },0)
//     const missingNumber=ViaMath-sumViahigh
//     res.send({ data: missingNumber  }  )
// })
//qus 2
   // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
 // Your route code will look like this
//  app.get("/sol2", function (req, res) {
//     //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
//     let arr= [33, 34, 35, 37, 38]
//     let missingNumber

//     ///LOGIC WILL GO HERE 

//     res.send(  { data: missingNumber  }  );
// });


// let anotherQus=[33, 34, 35, 37, 38]
// app.get('/sol2', function(req,res){
//     const sumViaOrder=anotherQus.reduce((acc,curr)=>{
//         acc=acc+curr
//         return acc
//     },0)
//     let n=anotherQus.length+1
//     let sumViaMath= n * (anotherQus[0] + anotherQus[(anotherQus.length)-1]) / 2
//     const missingNumber=sumViaMath-sumViaOrder
//     res.send({data: missingNumber})
// })




// router.get('/ques/:find' , function(req,res){
//     req.send('this is punishment' +req.params.find)
// })


// // PATH Param example
router.get('/student-details/:name', function(req, res){
//     /*
//     params is an attribute inside request that contains 
//     dynamic values.
//     This value comes from the request url in the form of an 
//     object where key is the variable defined in code 
//     and value is what is sent in the request
//     */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response'+studentName)
})

// // PATH Param example
// router.get("/profile/:name", function(req, res){
//     console.log('Printing the request to find out wjere name is stored',req.params)
//     console.log('user name is',req.params.name)
//     //console.log(`User requesting for profile is ${name}`)
//     res.send("dummy details" +req.params.name+ req.query.age)
// })

// Query Param example
// router.get("/shoes", function(req, res){
//     console.log("The filter options for shoes are -",req.query)
//     //req.query.size
//     //req.query.brand
//     const final={ 
//         name: 'rebook',
//         age :45 
//     }
//     res.send("dummy shoes response "+req.query.name)
// })




// router.post("/one", function(req,res){
//     const data=req.body;
//     console.log(data)
//     for(let i=0;i<filmsList.length;i++){
//         if(!players[i].name===req.body.name)
//       players.push(data)
// }
//     res.send({data:players})
// })



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


router.post('/players', function (req, res) {
    let reqName=req.body.name
let search=players.find(a=>a.name==reqName)
 if(search==undefined){
    players.push(req.body)
 }
    res.send(  { data: players , status: true }  )
})



module.exports = router;