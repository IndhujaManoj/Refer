//pgm 24
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
console.log(h,":",m,":",s,"")

//pgm 25

function twodim(row,column){
    let arr=[]
    for(let i = 0; i < row; i++) {
        arr[i] = [];
        for (let j = 0; j < column; j++) {
          arr[i][j] = "*";
        }
      }
      return arr;
      
}
console.log(twodim(3,4));

//pgm 26
function range(){
    let array=[2,5,6,7,9,8,5,98];
    let arr1=[]
    for(i=0;i<array.length;i++){
        if(array[i]%2==0){
            arr1.push(array[i])
        }
    }
    return arr1;
}

console.log(range())

//pgm 27

function deleteElement(){
    
    let del=[1,2,3,4,3,5,6,3,7]
    let del1=[]
    for(i=0;i<del.length;i++){
        if(del[i]!=3){
           del1.push(del[i])

    }
    }
    return del1;
}
console.log(deleteElement())

//pgm 28

let array1=["hello","world","javascript"]
let arrar2=["react"]
let concat=array1.concat(arrar2)
console.log(array1)
console.log(arrar2)
console.log(concat)

//pgm 29

let sample=["hello","karka","javascript"]
console.log(sample.sort())
//pgm 30

let arr = [1, 2, 3, 4, 5];

// remove all elements from the array except the first two
let firstTwo = arr.splice(0, 2);

console.log(firstTwo); 


// reset the array to its original value
arr = [1, 2, 3, 4, 5];
console.log(arr)

// create a new array that is a copy of the original array
let copyArr = arr.slice();

// remove all elements from the copy array except the first two
let firstTwoCopy = copyArr.splice(0, 2);

console.log(firstTwoCopy); 
console.log(copyArr); 

//pgm 31
function ternery(a){
return a%2==0 ?"even":"odd";
}
console.log(ternery(24))

//pgm 32

function string(x){
    return x.toString(2)
}
let decimal=4;
let binary=string(decimal);
console.log("binary value:",binary)

//pgm 33
function countVowels(word){
    let vowels="aeiou";
    let count=0;
    for(i=0;i<word.length;i++){
        if(vowels.includes(word[i])){
            count++;
        }
    }
    console.log("input:",word)
    console.log("vowels count:",count)
    return count;

}
countVowels("karka")

//pgm 34

let obj1={
    name:"Jack",
    age:26,
}
let obj2={
    gender:"male",
}
let merge={...obj1,...obj2};
console.log(merge)

//pgm 35
function trimfun(string){
    return string.trim();
}
let input="  karka academy   ";
let after_trim=trimfun(input);
console.log(after_trim)

//pgm 36

function emptyArray(arr){
    arr.length=0;
}
let myArray=[1,2,3,4,5];
console.log("before emptying:",myArray);
emptyArray(myArray);
console.log("after emptying:",myArray)

//pgm 37
function check(){
    if (myvariable==undefined || myvariable==null){
        console.log("the variable is undefined or null")
    }
    else{
        console.log("the variable is neither undefined or null")
    }
}
let myvariable;
check(myvariable)
myvariable=null;
check(myvariable)
myvariable="indhuja"
check(myvariable)
myvariable=0;
check(myvariable)

//pgm 38

function validateEmail(email) {
    if (!email) {
      return false;
    }
  
    const parts = email.split('@');
    if (parts.length !== 2) {
      return false;
    }
  
    const domain = parts[1].split('.');
    if (domain.length < 2) {
      return false;
    }
  
    return true;
  }
  
  const email1 = 'johndoe@example.com';
  const email2 = 'jane.doe@example.com';
  const email3 = 'example.com';
  const email4 = 'jane.doe@example';
  
  if (validateEmail(email1)) {
    console.log('The email address is valid');
  } else {
    console.log('The email address is not valid');
  }
  
  if (validateEmail(email2)) {
    console.log('The email address is valid');
  } else {
    console.log('The email address is not valid');
  }
  
  if (validateEmail(email3)) {
    console.log('The email address is valid');
  } else {
    console.log('The email address is not valid');
  }
  
  if (validateEmail(email4)) {
    console.log('The email address is valid');
  } else {
    console.log('The email address is not valid');
  }

//pgm 39

function remove(text){
  let result='';
  for(let i=0;i<text.length;i++){
    if(text[i]!==''){
      result+=text[i];
    }
  }
  return result;
}
let inputs="karka software academy";
let output=remove(inputs);
console.log("input:",output)

//pgm 40
function chunk(array_num,size){
  let empty=[]
  while(array_num.length){
    empty.push(array_num.splice(0,size))
  }
  return empty
}
  let numbers=[1,2,3,4,5,6,7,8,9]
  let new_chunk=chunk(numbers,3)
  console.log(new_chunk)
