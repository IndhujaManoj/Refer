//program 1
var a=5;
console.log("var:",a);

//pgm 2
let b=5;
console.log("let:",b)

//pgm 3
const c=5;
console.log("const:",c)

//pgm 4
var x=3;
let y=4;
if(x==3){
    console.log("x:",x,"y:",y)
}
//let y=2;
//console.log("x:",x,"y",y)

//pgm 5

var p=-4;
let q=-5
const r=-6;
if(p==-4 && q==-5 && r==-6){
    console.log("p:",p)
    console.log("q",q)
    console.log("r",r)
}
/*
var p=-4;
let q=-2;
let r=-3;

    console.log("p:",p)
    console.log("q",q)
    console.log("r",r)
*/
//pgm 6

let hobbies=["playing cricket","listening music","reading books"]
console.log(hobbies)

//pgm 7

let number=[20,50,30,60]
console.log(number[2])

//pgm 8

let colors=["red","green","blue"]

console.log("index of green =",colors.indexOf("green"))
 let result=colors;
 console.log("result:",result)
result=(result[1]="yellow")
console.log("updated result:",colors)

//pgm 9

let ope=[1,2]
for(i=0;i<ope.length;i++){
    if(ope[i]%2==0){
        console.log("the number is even.",ope[i])
    }
    else{
        console.log("the number is odd.",ope[i])
    }
}

//pgm 10

let fruits=["apple","banana","orange"]
console.log("before push",fruits)
fruits.push("grapes")
console.log("after push",fruits)

//pgm 11
let num=[2,20,40,12,13,56,18,69]
console.log(num)

for(i=0;i<num.length;i++){
    if(num[i]>=18){
        console.log(num[i])
    }
}

//pgm 12
let person={
    name:"karka",
    age:3,
    city:"putheri"
}
console.log(person)
 
//pgm 13
result=person.age;
console.log("age:",result)




