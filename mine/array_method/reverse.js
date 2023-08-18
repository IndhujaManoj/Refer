let a=[1,2,3,4,5,6]
console.log("before reverse:",a)
a.reverse();
console.log("after reverse:",a)
//array element with length property
let x={0:10,1:20,2:30,3:40,length:4}
console.log(x)
Array.prototype.reverse.call(x);
console.log(x)