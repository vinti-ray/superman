const MW=function(req,res,next){
    console.log("buddy middleware is connected")
    next()
}
module.exports.mw=MW