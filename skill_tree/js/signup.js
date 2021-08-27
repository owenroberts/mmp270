import { getElement } from './Cool.js';

const signupOpenButton = getElement('sign-up-open');
const authDiv = getElement('auth');
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
				ref.child('completed').update({ '0-0': false });
				ref.child('collabs').update({ '0-0': false });
				ref.child('roles').update({
					'user': true,
					'admin': false,
				});
				authDiv.classList.remove('open');

			})
			.catch(error => { 
				signupMessage.textContent = error.message; 
			});

	};
};