const user=function(req,res,next){
    
    console.log("The headers received in this request are: ", req.headers.isfreeappuser)
    if(req.headers.isfreeappuser){ 
        
        req.body.isFreeAppUser=req.headers.isfreeappuser
        
        next();
    } else{
        res.send({msg:"the request is missing a mandatory header"})
    }
   } 
   


// const orderMIdd=function(req,res,next){
 
// }



module.exports.middAssignment=user   
// module.exports.orderMidd=orderMIdd             



