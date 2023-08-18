/*for(i=0;i<=5;i++){
    console.log(i)
}
for(i=12;i<=24;i++){
    console.log(i)
}
for(i=7;i<=31;i++){
    if(i%2==1){
        console.log(i)
    }
}
for(i=10;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}
for(i=1;i<=45;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }
    else if(i%3==0){
        console.log("Fizz")
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}
let array=["element1","element2","element3","element4"];
var sum=0
for(i=0;i<array.length;i++){
console.log(array[i])}
let num=[1,13,22,123,49]
for(i=0;i<num.length;i++){
    sum=sum+array[i]
}
console.log(sum)
//add all num in array
let add=[23+45+67+89+65+32]
var sum=0
for (i=0;i<add.length;i++){
    sum=sum+add[i]
}
console.log(+sum)
//add 2 array
let arr1=[3,5,22,5,7,2,45,75,89,21,2]
let arr2=[9,2,42,55,71,22,4,5,90,25,26]
var sum1=0
var sum2=0
for(i=0;i<arr1.length;i++){
    sum1=sum1+arr1[i]
}
console.log("sum1:",+sum1)
for(j=0;j<arr2.length;j++){
     sum2=sum2+arr2[j]
}
console.log("sum2:",+sum2)
console.log("sum:",sum1+sum2)
for(i=1;i<=22;i++){
    if(i%2==0){
        console.log(i)
    }
    //console.log("\n")
}
let arr=[43,"what",9,true,"cannot",false,"be",3,true];

for(i=arr.length;i>=0;i--){
console.log(arr[i])}
let a=[4,6,7];
let b=[8,1,9];
let sum=0;
for(i=0;i<a.length;i++){
sum=a[i]+b[i]
console.log(+sum)
}
//console.log(+sum)
let stri="javascript";
for(i=0;i<stri.length;i++){
    if((i+1)%2==0){
        console.log("Z")
        
    }
    else{
        console.log(stri[i])
    }}
    */
    let str2="don't know why";
    let y=false;
    for(i=0;i<str2.length;i++){
    if(str2[i]=="y"){
        y=true;
        break;
    }
}
if(y){
    console.log("yes")
}
else{console.log("no")}



