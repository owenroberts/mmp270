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
	const name = makeElement({
		tag: 'p',
		text: data.displayName,
	});

	const comp = makeElement({
		tag: 'p',
		text: 'Completed: ' + Object.keys(data.completed).filter(index => data.completed[index]).join(', ')
	});

	usersDiv.appendChild(name);
	usersDiv.appendChild(comp);

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


	usersDiv.appendChild(addLabInput);
	usersDiv.appendChild(addLabButton);


}