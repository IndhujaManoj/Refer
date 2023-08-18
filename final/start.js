function hideLogin(){
    document.getElementById('page1').style.display="none"
    document.getElementById('page2').style.display="block"
}
function hideReg(){
    document.getElementById('page2').style.display="none"
    document.getElementById('page1').style.display="block"

}/*
function loading(){
    document.getElementById('page1').style.display="none"
    document.getElementById('page3').style.display="block"


}*/
function chatLogout(){
    document.getElementById('page4').style.display="none"
    document.getElementById('page1').style.display="block"
}

//login page

function loginHandling(event){
    event.preventDefault()
   


let username=document.getElementById('uname').value;
let password=document.getElementById('password').value;

for(let user of regUsers){
    if(user.id===username && user.pass===password){
        alert('login successfull!')
        //return
//loading()
    }else{
        alert('invalid username or password')
    }
}

}
//register form
