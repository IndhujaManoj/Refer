
// let array = [1, 0, 5, 3, 2, 0, 1, 0];
// let newArray = [];

// for (let i = 0; i < array.length; i++) {
//   newArray.push(array[i]);
//   if (array[i] === 0) {
//     newArray.push(0);
//   }
// }

// console.log(newArray);



let array = [1, 0, 5, 3, 2, 0, 1, 0];
let newArray = [];

for (let i = 0, j = 0; i < array.length; i++) {
  newArray[j] = array[i];
  j++;
  if (array[i] === 0) {
    let a=5
    newArray[j] = 0;
    j++;
  }
}

console.log(newArray);
console.log(a);

