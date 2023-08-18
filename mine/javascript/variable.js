/*
var
let
const
*/
var a=10;
var b=24;
console.log(a+b);

//1.scope
if(true)
{
    //var msg="welcom to study"
   // let msg="welcom to study"
      const msg="welcom to study"

    console.log(msg)
}
// 2.variable declaration
/*
var a=25;
console.log(a)

var a=45;
console.log(a)

let a=25;
console.log(a)

let a=45;
console.log(a)

const a=25;
console.log(a)

const a=45;
console.log(a)
*/
//3.value assignment
/*
var a=24
console.log(a);
var a=34
console.log(a);

let x=24
console.log(x);
x=34
console.log(x);
const x=24
console.log(x);
x=34 //constant error
console.log(x);
*/
const student={'name':"ram",'age':12};
console.table(student)
/*console.log(student.name)
student.name='indhuja'
console.table(student)*/

//refrrernce type

var cources=['c','c++','java'];
var students={
  "name":"indhuja",
  'age':23,
  'dsept':"it",
}

console.log("type is: ",typeof(cources));
console.log("type  of student is: ",typeof(students));
var d=new Date();
console.log(d)