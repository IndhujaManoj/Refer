let loginContainer = document.querySelector('.login-container');
let chatContainer = document.querySelector('.chat-container');
let messageInput = document.getElementById('message-input');
let chatBox = document.getElementById('chat-box');
let welcomeMessage = document.getElementById('welcome-message');
let logoutButton = document.getElementById('logout-button');
let sendButton = document.getElementById('send-button');
let username = '';

// hide chat container and show login container
chatContainer.classList.add('hidden');

// login function
function login() {
	username = document.getElementById('username-input').value;

	// check if username is empty
	if (!username) {
		alert('Please enter a username');
		return;
	}

	// hide login container and show chat container
	loginContainer.classList.add('hidden');
	chatContainer.classList.remove('hidden');

	// set welcome message
	welcomeMessage.textContent = 'Welcome, ' + username + '!';

	// focus on message input
	messageInput.focus();
}

// add message to chat box
function addMessage(user, message) {
	let p = document.createElement('p');
	p.textContent = user + ': ' + message;
	chatBox.appendChild(p);
	chatBox.scrollTop = chatBox.scrollHeight;
}

// send message function
function sendMessage() {
	let message = messageInput.value;

	// check if message is empty
	if (!message) {
		alert('Please enter a message');
		return;
	}

	// add message to chat box
	addMessage(username, message);

	// clear message input
	messageInput.value = '';

	// focus on message input
	messageInput.focus();
}

// log out function
function logout() {
	// show login container and hide chat container
	loginContainer.classList.remove('hidden');
	//chatContainer.classList.add('hidden');

	// clear chat box
	//chatBox.innerHTML = '';

	// clear username
	username = '';

	// focus on username input
	document.getElementById('username-input').focus();
}

// add event listeners
document.getElementById('login-button').addEventListener('click', login);
sendButton.addEventListener('click', sendMessage);
logoutButton.addEventListener('click', logout);
messageInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		sendMessage();
	}
});