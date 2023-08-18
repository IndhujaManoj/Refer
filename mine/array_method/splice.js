let n1=[1,2,3,4,5,6,7,8,9,10]
console.log("before splice:",n1)
let removed_element=n1.splice(2)
console.log("removed items:",removed_element)
console.log("after splice:",n1)

console.log("------------------------------------------------")


let n2=[1,2,3,4,5,6,7,8,9,10]
console.log("before splice:",n2)
let remove_element=n2.splice(2,2)
console.log("removed items:",remove_element)
console.log("after splice:",n2)

console.log("------------------------------------------------")

let n3=[1,2,3,4,5,6,7,8,9,10]
console.log("before splice:",n3)
let remo_element=n3.splice(2,2,[34,56,90]);
console.log("removed items:",remo_element)
console.log("after splice:",n3)

console.log("------------------------------------------------")

let n4=[1,2,3,4,5,6,7,8,9,10]
console.log("before splice:",n4)
n4.splice(2,0,100,300)
console.log("after splice:",n4)


