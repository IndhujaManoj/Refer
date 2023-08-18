let names=["zara","indhuja","nathan","manoj","pavi"];
console.log("before sort:",names)
names.sort();
console.log("after sort:",names)
let n1=[100,23,13,94,5,600,57,78,89,10]
console.log("before sort:",n1)
n1.sort();
console.log("after sort:",n1)

n1.sort((a,b)=>{
    return a-b;
})
console.log("compare sort:",n1)

n1.sort((a,b)=>{
    return b-a;
})
console.log("decending:",n1)

let user=[
    {
        name:"indhuja",
        age:12,
        salary:1000
    },
    {
        name:"nathan",
        age:22,
        salary:10008
    },
    {
        name:"ayyappan",
        age:56,
        salary:1445
    },
    {
        name:"manju",
        age:34,
        salary:1056
    },
    {
        name:"manoj",
        age:16,
        salary:989000
    },
    {
       name:"kumar",
        age:72,
        salary:41000
    },
]/*
console.table(user)
user.sort((a,b)=>{
    return a.age-b.age
})*/
console.table(user)
user.sort((a,b)=>{
    if( a.name>b.name) return 1;
     if(a.name<b.name)  return -1;
    return 0; 
    
})
console.table(user)

