function hideLogin(){
    document.getElementById('page1').style.display="none"
    document.getElementById('page2').style.display="block"
}
function hideReg(){
    document.getElementById('page2').style.display="none"
    document.getElementById('page1').style.display="block"

}
function loading(){
    document.getElementById('page1').style.display="none"
    document.getElementById('page3').style.display="block"


}
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
loading()
    }else{
        alert('invalid username or password')
    }
}

}

//register form
regUsers=[]
function registation(event){
    event.preventDefault()
     //username
     var username = document.getElementById("name").value;
     var checkUsername = /^[a-zA-Z\s]/;
     var valuate = checkUsername.test(username)
     if (valuate == false) {
         document.getElementById("n1").innerHTML = "Please enter a Valid Username"
     }
     else if(valuate == true){
         document.getElementById("n1").innerHTML = ""
     }
 
     //email-id
     var email = document.getElementById("mail").value;
     let checkEmail = /^\S+@\S+\.\S/;
     var valuate2 = checkEmail.test(email)
     if (valuate2 == false) {
         document.getElementById("n2").innerHTML = "Please enter a Valid mail-Id"
     }
     else if(valuate2== true){
         document.getElementById("n2").innerHTML = ""
     }
 
     //password
     var password = document.getElementById("psw").value;
     let checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&?])[A-Za-z\d#$@!%&?]{8,30}$/;
     var valuate3 = checkPassword.test(password);
     if (valuate3 == false) {
         document.getElementById("n3").innerHTML = "*password must contain min 1('uppercase','lowercase','special charcter','no') & '8-30' characters."
     }
     else if(valuate3== true){
         document.getElementById("n3").innerHTML = ""
     }
 
     //re-enter password
     var repassword = document.getElementById("new1").value;
     if (password != repassword || repassword=="") {
         document.getElementById("n4").innerHTML = "please enter correct password"
     }
     else if(password== repassword){
         document.getElementById("n4").innerHTML =""
     }
 
     //phone number
     var phoneno = document.getElementById("no").value;
     var checkPhoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/;
     var valuate4 = checkPhoneno.test(phoneno);
     if (valuate4 == false) {
         document.getElementById("n5").innerHTML = "please enter your 10 digit mobile no without +91"
     }
     else if (valuate4== true){
         document.getElementById("n5").innerHTML = ''
     }
 
      if(valuate== true && valuate2 == true && valuate3 ==true && valuate4==true && password == repassword ){
        f3=document.getElementById('f3')
          f3.reset();
          var myobj={"id":username,"pass":password}
          regUsers.push(myobj)
          console.log(regUsers,"reg")
      }
 }
