


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

  module.exports.middware=id