//for each method

const fruits=['apple','banana','ornage']
console.log(fruits);
fruits.forEach(fruit=>console.log(fruit))

//sum all elements of array
const num=[1,3,5,6,8];
let total=0;
num.forEach(number=>{
    total+=number
});
console.log(total)

//create new array from existing one
const doubleNum=[];
num.forEach(number=>{
    console.log(number*2);

})
