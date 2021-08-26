/*
	login users
*/

import { getElement } from './Cool.js';

const authButton = getElement('auth-button');
const authDiv = getElement('auth');
const userName = getElement('user-name');
authDiv.isOpen = false;

authButton.onclick = function() {
	if (authDiv.isOpen) authDiv.classList.remove('open');
	else authDiv.classList.add('open');
	authDiv.isOpen = !authDiv.isOpen;
};

firebase.auth().onAuthStateChanged(user => {
	if (user) {
		const userRef = firebase.database().ref('users').child(user.uid);
		userRef.on('value', snapshot => {
			const userInfo = snapshot.val();
			updateUserDisplay(userInfo.displayName);
		});	
	}
});

function updateUserDisplay(name) {
	userName.textContent = 'Hi, ' + name;
	authButton.style.display = 'none';
}


const loginButton = document.getElementById("login-button");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");
const message = document.getElementById("login-message");
loginButton.onclick = function(event) {
	const promise = firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value);
	promise.catch(function(error) {
		message.textContent = error.message;
	});
};