// JavaScript is a scripting or programming language that allows you to implement complex features on web pages 








// console.log(firstValue)
// //you can 
// var firstValue=1
// console.log(firstValue)
// var firstValue=7
// console.log(firstValue)

// let secondValue=45
// // let secondValue=3

// secondValue=56
// console.log(secondValue)

// const thirdValue=67
// // thirdValue=1
// console.log(thirdValue)

var deleteDuplicates = function(head) {
    let a=[]
    for(let i=0;i<head.length;i++){
        if(!a.includes(head[i])){
            a.push(head[i])
        }
    }
    return a
};
console.log(deleteDuplicates([1,9,7,1,2,3,3]))
let a=[3,5,6,4]
let x=a.sort((a,b)=>a-b)
let y=x[a.length-1]-x[0]
console.log(y)