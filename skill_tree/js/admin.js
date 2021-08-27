import { getElement, makeElement } from './Cool.js';

const usersDiv = getElement('users');


firebase.auth().onAuthStateChanged(user => {
	if (user) {
		const userRef = firebase.database().ref('users').child(user.uid);
		userRef.on('value', snapshot => {
			const userInfo = snapshot.val();
			if (userInfo.roles.admin) getUsers();
			else usersDiv.textContent = ';)';
			
		});	
	}
});

function getUsers() {
	const usersRef = firebase.database().ref('users');
	usersRef.once('value', snapshot => {
		for (const uid in snapshot.val()) {
			displayUser(uid, snapshot.val()[uid])
		}
	});
}

function displayUser(uid, data) {
	const user = makeElement({ className: 'user' });
	const name = makeElement({
		tag: 'p',
		text: data.displayName,
	});

	const completedLabs = Object.keys(data.completed).filter(index => data.completed[index]).join(', ');

	const comp = makeElement({
		tag: 'p',
		text: 'Completed: ' + completedLabs
	});

	const addLabInput = makeElement({
		tag: 'input',
	});

	const addLabButton = makeElement({
		tag: 'button',
		text: 'Add Lab',
		onclick: function() {
			const newLab = {};
			newLab[addLabInput.value] = true;
			firebase.database().ref('users').child(uid).child('completed').update(newLab);
			comp.textContent += ', ' + addLabInput.value;
		}
	});

	user.appendChild(name);
	if (completedLabs) user.appendChild(comp);
	user.appendChild(addLabInput);
	user.appendChild(addLabButton);

	usersDiv.appendChild(user);

}