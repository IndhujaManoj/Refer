//string literals
let names=`indhuja`
//let age=23
//let result=`my name is ${names}`
//console.log(`${result}`)
/*
//function
const add=(a,b)=> a+b
console.log(add(4,5))

//variable declaration
console.log("a:",a)
console.log("b:",b)
console.log("c:",c)
var a=5
let b=7
const c=8*/

//obj
/*const per={
    name:"indhu"
}
per.name="nandhu"
console.log(per)*/

//imediate

/*(function(){
    console.log("c:",3+4)
}
(),)*/
/*
(function(a,b){
    a=10;
    b=20;
    c=a+b
    console.log(c)
}
(3,4),)
*/
const per={
    name:"indhuja",
    age:23
}
const{name,age}=per
console.log(name,age)
/*
const me=[1,2,3,4,5]
const[first]=me
console.log(a)

const me=[1,2,3,4,5]
const[first,second,...rest]=me
console.log(rest)*/

//map function
const me=[1,2,3,4,5]
let re=me.map((a)=>{
    return a+2
})
console.log(re)
//filter
let ages=[32,45,12,23,15,18]
let find=ages.filter((a)=>a<18)
console.log(find)
//reduce
let num=[1,2,3,4,5,6,7]
let result=num.reduce((acc,current)=>{
    return acc+current
})

console.log("total:",result)
//use rest and reduce

function val(...rest){
let sum=rest.reduce((acc,cur)=>{
    return acc + cur
})
console.log("sum:",sum)
}
val(4,8,9,11,12)

let myObj={
    mark1:89,
    mark2:90,
    mark3:98
    
}
    let add=Object.values(myObj)
    let finds=add.reduce((acc,cur)=>{
        return acc+cur
    })
    console.log(names,"total marks:",finds)
//})


