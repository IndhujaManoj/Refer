//setTime out
/*
setTimeout((name)=>{
    console.log(name)
},3000,'indhuja')

//setInterval
let count=0;

let result=setInterval(()=>{
    
    count++
    console.log(count)
    if(count==5){
        clearInterval(result)
    }
},3000)
a=10.2
b=7
c=-19
console.log(Math.ceil(a))
console.log(Math.floor(a))
console.log(Math.abs(c))
console.log(Math.min(a,b))
console.log(Math.max(a,b))
console.log(Math.sqrt(a))
console.log(Math.PI)
console.log(Math.pow(a,b))
*/
function me(){
    let num1=8;
   let result= function inner(){
       c= num1+7
       return c
    }
    return result

}
console.log("c:",me())
/*
function out(){
var a=8;
  var res= function inn(){
   console.log(a+7)
    }
    return res
}
console.dir(out())

console.dir("c:",out())
*/

/*
function out(){
    var a=6
    var res=function inn(){
        c=a+7
        console.log(c)

        
    }
    return res
}
console.log(out())*/




