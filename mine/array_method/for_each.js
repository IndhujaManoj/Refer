let a=[10,20,30,40]
console.log(a)

//array constructor

let b=new Array(10,20,30,40)
console.log(b);

let c=new Array("indhuja",35,true,{m1:23,m2:67})
console.table(c)

//for each

let number=[1,2,3,4,5,6,7,8,9,10];
//value,index,array
number.forEach((value,index)=>{
    console.log("index:",index+" "+"value:",value)
})

//in objext

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
user.forEach((value)=>{
    console.log(value.name)
});


