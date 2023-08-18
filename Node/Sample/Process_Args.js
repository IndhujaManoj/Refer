//process.argv
/*
console.log(process.argv[0])
console.log(process.argv[1])
 console.log(process.argv[2])



 const nameArg=process.argv[2] || 'world';
console.log(`Hello ${nameArg}`)
 */
const nameArg=capitalize(process.argv[2] || 'world');
console.log(`Hello ${nameArg}`);

function capitalize(str){
    return str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((words)=>words.charAt(0).toUpperCase()+words.slice(1))
    .join(" ")

}
 