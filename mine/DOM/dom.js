
//HTML Collections
let list=document.getElementsByTagName("li")
console.log(list)
console.log(list.length)
let element=document.createElement("li")
element.innerHTML="JAVASCRIPT"
list[0].parentNode.appendChild(element)
for(i=0;i<list.length;i++){
    list[i].style.color="red"
}
//queryselectorAll
/*
let li=document.querySelectorAll("li")
let element=document.createElement("li")
element.innerHTML="JAVASCRIPT"
li[0].parentNode.appendChild(element)
console.log(li)

li.forEach((element)=>{
    element.style.color="purple"
})*/