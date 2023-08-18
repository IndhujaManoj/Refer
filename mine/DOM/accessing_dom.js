//document.getElementById

let brand=document.getElementById("brand")
console.log(brand)
console.log(brand.nodeName)
brand.style.backgroundColor="purple"
brand.style.color="white"

//document.getElementsByClassName

let stitle=document.getElementsByClassName("sub_title")
console.log(stitle)
stitle[0].style.color="red"
stitle[1].style.color="blue"
for(i=0;i<stitle.length;i++){
    stitle[i].style.color="green"
}
//document.getElementsByTagNameS
let para=document.getElementsByTagName("p")
console.log(para)
for(i=0;i<para.length;i++){
    para[i].style.color="purple"
}
//document.querySelector
let heading=document.querySelector("h1")
console.log(heading)
heading.style.color="red"

//document.querySelectorAll
let qpara=document.querySelectorAll("p")
console.log(qpara)
qpara.forEach((element)=>{
    element.style.color="blue"
})