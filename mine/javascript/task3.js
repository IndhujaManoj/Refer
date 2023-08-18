/*let marksheet={
    Tamil:89,
    English:89,
    maths:90,

}
marksheet.science=87
console.log(marksheet)
function add(){
   let a=marksheet.Tamil;
    let b=marksheet.English;
    let c=marksheet.maths;
    let d=marksheet.science;
    let total=a+b+c+d;
    console.log(total);
*/

function mark(old,s_new){
    let set={...old,...s_new};
    console.table(set)
    let a=set.tamil;
    let b=set.english;
    let c=set.maths;
    let d=set.science;
    let e=set.social;
    let total=a+b+c+d+e;
    console.log(total)

}
