//program1
function add(fname,lname){
    console.log(fname +" " + lname);
}

//program 2
function add_hobby(h1,h2){
   
    h1.push(h1);
    console.log(h2);
}
//program 3
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