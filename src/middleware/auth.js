

const checkToken= function(req,res,next){
  let token=  req.headers["x-Auth-Token"]
  if(!token) token =req.headers["x-auth-token"]
  if(!token) return res.send({status :false,msg:"the req is missing a mandatory header"})





  next()
}



module.exports.checkToken=checkToken
