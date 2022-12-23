const user=function(req,res,next){
    let dataFromHeader=req.headers.isFreeAppUser
    console.log(dataFromHeader)
    if(!dataFromHeader)    res.send({msg:"the request is missing a mandatory header"})
       next();
   }
module.exports.middAssignment=user      