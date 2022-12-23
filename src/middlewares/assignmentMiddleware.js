const user=function(req,res,next){
    
    console.log("The headers received in this request are: ", req.headers.isfreeappuser)
    if(!req.headers.isfreeappuser)    res.send({msg:"the request is missing a mandatory header"});
      
       next();
    
   } 
   

module.exports.middAssignment=user                