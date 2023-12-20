const myObjec = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  
  for (const keys in myObjec) {
    const value = myObjec[keys];
    console.log(value);
  }


// for (const key in myObject) {
//     if (myObject.hasOwnProperty(key)) {
//       const value = myObject[key];
//       console.log(value);
//     }
//   }
  
// const values = Object.values(myObject);

// for (const value of values) {
//   console.log(value);
// }

// const entries = Object.entries(myObject);

// for (const [key, value] of entries) {
//   console.log(value);
// }
