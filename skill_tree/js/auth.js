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


const signupOpenButton = getElement('sign-up-open');
signupOpenButton.onclick = function() {
	const signupDiv = getElement('sign-up');
	signupDiv.classList.add('open');

	const signupButton = getElement('submit-sign-up');
	const signupUsername = getElement('sign-up-username');
	const signupEmail = getElement('sign-up-email');
	const signupPassword = getElement('sign-up-password');
	const signupMessage = getElement('sign-up-message');


	signupButton.onclick = function() {

		if (!signupUsername.value ||
			!signupEmail.value ||
			!signupPassword.value) {
			signupMessage.textContent = 'Please fill in each value.';
			return;
		}

		firebase.auth().createUserWithEmailAndPassword(signupEmail.value, signupPassword.value)
			.then(credential => {
				const ref = firebase.database().ref('users').child(credential.user.uid);
				ref.update({ displayName: signupUsername.value });
				ref.child('completed').update({ '0-0': true });
				authDiv.classList.remove('open');

			})
			.catch(error => { 
				signupMessage.textContent = error.message; 
			});

	};
};




