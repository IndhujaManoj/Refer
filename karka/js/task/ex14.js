//pgm 14
let person={
    name:"karka",
    age:3,
    city:"putheri"
}
let result=person.age;
result=5
console.log(person)

//pgm 15
function calculateSum(num1,num2){
    return num1+num2;
}
let results=calculateSum(10,5)
console.log(results)

//pgm 16
function isGreaterThan10(num){
    if (num>10){
        console.log("greater than")
        return true;
    }
    else{
        console.log("less than")
        return false;

    }
}
let result1=isGreaterThan10(2)

//pgm 17
function compare(a,b){
    if(a<b){
        console.log("b is greater")
    }
    else if(a>b){
        console.log("a is greater")
    }
    else {
        console.log("a is equal to b")
    }
}
compare(12,34)

//pgm 18
let remove=["hello","karka","javascript"]
console.log("before shifting",remove)
remove.shift();
console.log("after shifting",remove)

//pgm 19

let pop=["hello","karka","javascript"]
console.log("before pop:",pop)
pop.pop();
console.log("after pop:",pop)

//pgm 20

var unshift=["hello","karka","javascript"]
console.log("before unshift:",unshift)
unshift.unshift("react");
console.log("after unshift:",unshift)







