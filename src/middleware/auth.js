
const jwt = require("jsonwebtoken");
const { invalid } = require("moment/moment");

const checkToken= function(req,res,next){
  let token=  req.headers["x-Auth-Token"]
  if(!token) token =req.headers["x-auth-token"]
  if(!token) return res.send({status :false,msg:"the req is missing a mandatory header"})


  let verifyToken= jwt.verify(token,"assignment-secret-key") 
  if(!verifyToken)    return res.send({status:false,msg:"invalid token"})

  next()
}

//+ Please note that you have to also write the logic for authorisation now so that a logged in user can modify or fetch ONLY their own data.
// Check that request must contain **x-auth-token** header. If absent, return a suitable error.
// If present, check that the token is valid.

module.exports.checkToken=checkToken

