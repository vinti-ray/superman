const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//Write a **POST api /users** to register a user from the user details in request body. 
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ status:true,msg: savedData });
};


// Write a ***POST api /login** to login a user that takes user details - email and password from the request body. If the credentials don't match with any user's data return a suitable error.
// On successful login, generate a JWT token and return it in response body. Example 
const loginUser = async function (req, res) {
    let emailId=req.body.emailId
    let password=req.body.password
    const loginUser=await userModel.findOne({emailId:emailId,password:password})
     if(!loginUser)   return res.send({status:false,msg:"emailId or password is wrong"})

    let token=jwt.sign({userId:loginUser._id.toString(),name:loginUser.firstName},"assignment-secret-key")
    res.send({status:true,data:token})

};


//- Write a **GET api /users/:userId** to fetch user details. Pass the userId as path param in the url. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
// If present, check that the token is valid.
const getUserData = async function (req, res) {
   let userId=req.params.userId

   let fetchUser=await userModel.findById(userId)
   if(!fetchUser) return res.send({status:false,msg:"no such user exist"})
   
   res.send({status:true,data:fetchUser})

};
//Write a **PUT api /users/:userId** to update user details. Pass the userId as path param in the url and update the attributes received in the request body. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
const updateUser = async function (req, res) {

   let userId=req.params.userId
   let data=req.body
   console.log(data)
   const updateData= await userModel.findOneAndUpdate({_id:userId},data,{new:true})

   res.send({status:true,msg:updateData})


};

//- Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
const deleteData=async function(req,res){

  let userId=req.params.userId
  const deleteData= await userModel.findOneAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true})
  res.send({status:true,msg:deleteData})
}






module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteData=deleteData
