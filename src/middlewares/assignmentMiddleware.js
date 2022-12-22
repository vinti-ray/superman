


const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  }; 
  const id=function(req,res,next){
            
            console.log(navigator.geolocation.getCurrentPosition(successCallback, errorCallback))
            next()
  }
  const mid5 = function(req,res,next){
    console.log("bro i finally made it")
       next()
  }
 

 module.exports.midd6=id
module.exports.middware=mid5