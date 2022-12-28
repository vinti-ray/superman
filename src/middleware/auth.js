
const jwt = require("jsonwebtoken");
const { invalid } = require("moment/moment");
const checkToken= function(req,res,next){
  let token=  req.headers["x-Auth-Token"]
  if(!token) token =req.headers["x-auth-token"]
  if(!token) return res.send({status :false,msg:"the req is missing a mandatory header"})

  let verifyToken= jwt.verify(token,"assignment-secret-key") 
  console.log(verifyToken);
  if(!verifyToken)    return res.send({status:false,msg:"invalid token"})
   
let idFromParam=req.params.userId
let idFromToken=verifyToken.userId
if(idFromParam!=idFromToken) return res.send({status:false,msg:"user is not authorised"})

  next()
}

//+ Please note that you have to also write the logic for authorisation now so that a logged in user can modify or fetch ONLY their own data.


module.exports.checkToken=checkToken

