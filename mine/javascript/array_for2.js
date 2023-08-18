let names=[{
    name      :"Ramesh",
    place     :"krishnancoil",
    education :["BE","MBA","MCA"],
skill         :["reading","swimming","coading"]

},
{
    name       :"indhuja",
    place      :"nagercoil",
    education  :["BSC","MSC","MCA"],
    skill      :["cooking","reading","coading"]

},
{
    name       :"abinaya",
    place      :"vadasery",
    education  :["BCA","MCA","MSC"],
    skill      :["cooking","reading"]
      
},
{
    name       :"pavithra",
    place      :"krishnancoil",
    education  :["BE","ME","MBA"],
    skill      :["cooking","reading","coading"]
}  

]
/*
for(let i=0;i<names.length;i++){
    console.log(names[i].name)
        
    for(let j=0;j<names[i].education.length;j++){
        console.log(names[i].education[j])
    }  
} 
*/
console.log("---------------------------------------------")
/*
for(let i=0;i<names.length;i++){
    for(j=0;j<names[i].skill.length;j++){
        if(names[i].skill[j]=="coading"){
            console.log(names[i].name)
        }
    }
}
console.log("---------------------------------------------")
for(let i=0;i<names.length;i++){
    for(j=0;j<names[i].education.length;j++){
        if(names[i].education[j]=="MCA"){
            console.log(names[i].place,names[i].name)
        }
    }
}*/
console.log("---------------------------------------------")
for(i=0;i<names.length;i++){
    if(names[i].place=="krishnancoil"){
        console.log(names[i].name)
    }
}