function printDate(){
     let date=new Date()
     console.log((date.getDate()))
     console.log((date.getMonth()+1))
}
function getBatchInfo(batch,week,day,topic){
    console.log(`${batch}, ${week},${day},the topic for today is ${topic}`)
}

module.exports.dateQus=printDate
module.exports.getBatchInfo=getBatchInfo
