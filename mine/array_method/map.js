let number=[1,2,3,4,5,6,7,8,9,10];
//map(value,index,array)
let sqrt=number.map((value)=>{
    return Math.sqrt(value).toFixed(2);
});
console.table(sqrt)


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
]
console.table(user)
let eligible=user.map((value)=>({
/*name:value.name,
age:value.age,
salary:value.salary,*/
...user,
status:value.age>=18?"eligible":"not eligible"
}))
console.table(eligible)















