function msgimg() {
	document.getElementById("page4").style.display = "none"
	document.getElementById('page5').style.display = "block"
}
function chatLogout() {
	document.getElementById('page5').style.display = "none"
	document.getElementById('page1').style.display = "block"

}

function news(){
	document.getElementById("page4").style.display = "none"
	document.getElementById('page6').style.display = "block"

}
function profileChanged(){
	document.getElementById("page4").style.display = "none"
	document.getElementById('page7').style.display = "block"
}
let logoutButton = document.getElementById('logout-button')
logoutButton.addEventListener('click', function (event) {
	event.preventDefault()
	chatLogout()
})
let myArray = []
imgChat = document.getElementById('img1')
imgChat.addEventListener('click', fun)
function fun() {
	msgimg()
	//username=document.getElementById('uname').value;
	username = "indhuja"
	var messageInput = document.getElementById("message-input");

	function addMessage() {
		myArray.push({ [username]: messageInput.value })
		console.log(myArray)
		messageInput.value = '';
		display()

	}
	function display() {
		let messages = ""
		for (let i = 0; i < myArray.length; i++) {
			if (Object.keys(myArray[i].length) == username) {
				messages += `<div class="text-right "><label class="current-user">${Object.values(myArray[i])}</label></div></br>`
			} else {

				messages += `<div class="text-left"><label class="old-user"><small>${Object.keys(myArray[i])}</small></br>${Object.values(myArray[i])}</label></div></br>`	
			}
		}
	var chatContainer = document.getElementById("chat")

		chatContainer.innerHTML = messages;
		let chat = document.getElementById('chat-container')
		chat.scrollTop = chat.scrollHeight;

	}
	var sendButton = document.getElementById("send-button");
	sendButton.addEventListener("click", addMessage);

	display()
}
imgNews=document.getElementById('img2')
imgNews.addEventListener('click',newShow)

function newShow(){
	news()
}
	let display = document.getElementById('container')
    let likeArray = []
    let unlikeArray = []
    let lastClick = []
    function uptades() {
        let container = document.getElementById('container');
       container.style.display = 'none'
       let tabutton=document.getElementById('head1')
            tabutton.style.display="none"
        for(i=0;i<likeArray.length;i++){
            my_likes=likeArray[i]
            console.log(my_likes)
        
        let table=document.getElementById('table')
        var row = table.insertRow()
        var my_para=row.insertCell(0)
        var likeCells=row.insertCell(1)
      let  remove=row.insertCell(2)
        likeCells.innerHTML=my_likes
        my_para.innerHTML="Liked Messages :"
        remove.innerHTML=`<button onclick="removed(this)">Remove</button>`
        }

        for(i=0;i<unlikeArray.length;i++){
            my_unlikes=unlikeArray[i]

            let unlikes=document.getElementById('unlikes')
            var row1 = unlikes.insertRow()
            var my_para1=row1.insertCell(0)
            var unlikeCells=row1.insertCell(1)
            unl_Remove=row1.insertCell(2)
            my_para1.innerHTML="Unliked Messages :"
            unlikeCells.innerHTML=my_unlikes;
            unl_Remove.innerHTML=`<button onclick="removed(this)">Remove</button>`
         }
    }
    function removed(button){
        let removeRow=button.parentNode.parentNode;
        likeArray.splice(removeRow,1);
        lastClick.splice(removeRow,1)
        removeRow.remove()

    }
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://timesofindia.indiatimes.com/rssfeedstopstories.cms')
        .then(response => response.json())
        .then(data => {
            let items = data.items;
            let titles = ''
            for (let i = 0; i < items.length; i++) {
                titles += items[i].title + `<img src="like.png" id="like" class="like-btn"><img src="images.png" id="unlike" class="unlike-btn"></br> </br>`
            }

            display.innerHTML = titles

            let like_btn = document.querySelectorAll('.like-btn')
            like_btn.forEach(btn => {

                btn.addEventListener('click', function () {
                    let text = btn.previousSibling.textContent
                    lastClick.push(text)
                    if (!likeArray.includes(text) && (!unlikeArray.includes(text))) {
                        likeArray.push(text)
                    }

                })
                console.log('like:',likeArray)
            })

            let unlike_btn = document.querySelectorAll('.unlike-btn')
            unlike_btn.forEach(button => {
                button.addEventListener('click', function () {
                    let unText = button.previousSibling.previousSibling.textContent
                    lastClick.push(unText)

                    if (!unlikeArray.includes(unText) && (!likeArray.includes(unText))) {

                        unlikeArray.push(unText)
                    }
                })
                console.log('un',unlikeArray)
                console.log(lastClick,"l")
            })
        })
        .catch(error => console.error(error));
		//profile
		let profileimg=document.getElementById('avatar')
		profileimg.addEventListener('click',profileShow)
function profileShow(){
	profile()
}

document.getElementById('head').innerHTML = username
function pass() {
 
  const newUsernameInput = document.createElement("input");
  const newPasswordInput = document.createElement("input");
  newUsernameInput.type = "text";
  newPasswordInput.type = "password";

  const saveButton = document.createElement("button");
  saveButton.innerText = "Save Changes";
  saveButton.addEventListener("click", () => {
    const newPassword = newPasswordInput.value;
    if (newPassword.length < 5) {
      alert("Password must be at least 5 characters long.");
      return;
    }

    const newUsername = newUsernameInput.value;
    localStorage.setItem("name", newUsername);
    localStorage.setItem("password", newPassword);

    alert("Your changes have been saved.");
    document.getElementById('head').innerHTML = newUsername
    container.style.display = 'none'
  });

  const container = document.createElement("div");
  container.setAttribute("id","save")
  container.appendChild(document.createTextNode("New username: "));
  container.appendChild(newUsernameInput);
  container.appendChild(document.createElement("br"));
  container.appendChild(document.createTextNode("New password: "));
  container.appendChild(newPasswordInput);
  container.appendChild(document.createElement("br"));
  container.appendChild(saveButton);

  document.body.appendChild(container);
profileChanged()
}