const Practice=require('../models/practiceModel')
const createPractice=async function(req,res){
    let data=req.body
    let SaveData= await Practice.create(data)
    res.send({msg:SaveData})
}
const getData=async function(req,res){
    let page=req.query.pagenumber
let fetchData=await Practice.find({$or:[{roll:2},{name:"amar"}]}).select({name:1,roll:1,_id:0})
    res.send({msg:fetchData})
}
module.exports.createPractice=createPractice
module.exports.fetchData=getData



//skip(n) skips n items in a query, while limit(m) returns only the next m items starting from the n-th one.

//if user want page 4 then i have to skip content before page four ...no after skip describe how many content in a page hence no of slip content should be page-1multiply with content,limit is how many document we want to ssee after skiped 

// $in operator is used to select documents in which the field's value equals any of the given values in the array.

//.find({   $and:  [  {roll:{$gt:5}},  {roll:{$lt:10}}  ]   })  5<roll<10
