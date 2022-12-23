const bookModel = require("../models/assignmentModel");
const mongoose=require("mongoose")

const createBook = async function (req, res) {
  let data = req.body; 
  let savedData = await bookModel.create(data);
  res.send(savedData);
};

const bookList = async function (req, res) {
  let fetchBookList = await bookModel.find()
  res.send({ msg:fetchBookList});
}

//6
const getBooksInYear = async function (req, res) {
  let yearInReq=req.body.year
  let findBookByYear=await bookModel.find({year:yearInReq})
  res.send({ msg:findBookByYear});
}
//7
const getParticularBooks = async function (req, res) { 
   let fromBody=req.body
  let getBookFromInput= await bookModel.find(fromBody)     //because content in body is in object form and we pass a object in find itself hance we didn't used here {}
  res.send({ msg:getBookFromInput});
}

//11
const getXINRBooks = async function (req, res) {
let fetchBook=await bookModel.find({"price.indianPrice":{$in:["₹100","₹200","₹500"]}})
res.send({ msg:fetchBook});
}


//13
const getRandomBooks = async function (req, res) {
let fetchRandomBoooks= await bookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
  res.send({ msg:fetchRandomBoooks});
};

module.exports.createBook = createBook;
module.exports.bookList = bookList;
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks
