import { getElement, makeElement } from './Cool.js';
import SkillTreeDataProvider from './skill-tree-data.js';


const tree = SkillTreeDataProvider();
const pointsTree = Object.keys(tree).map(tier => {
	const modules = tree[tier].modules;
	return Object.keys(modules).map(mod => {
		return tree[tier].modules[mod].points;
	})
});

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
	// order ?
	const usersRef = firebase.database().ref('users').orderByChild('displayName');
	usersRef.once('value', snapshot => {
		snapshot.forEach(user => {
			displayUser(user.key, user.val())
		});
	});
}

function displayUser(uid, data) {

	let totalPoints = 0;

	const user = makeElement({ className: 'user' });
	const name = makeElement({
		tag: 'p',
		className: 'name',
		text: data.displayName,
	});
	user.appendChild(name);

	const points = makeElement({ className: 'points' });
	user.appendChild(points);
	

	['completed', 'bonus', 'collab'].forEach(param => {

		let labs = data[param] ? 
			Object.keys(data[param])
				.filter(index => data[param][index])
				.map(index => { return index.replace('-', '.') })
				// .join(', ') :
				:
			'';

		if (labs) {
			labs.forEach(lab => {
				if (param === 'bonus' || param === 'collab') totalPoints += 1;
				if (param === 'completed') {
					const [i, j] = lab.split('.');
					if (i && j) totalPoints += pointsTree[+i][+j];
				}
			})
			labs = labs.join(', ');	
		}



		const comp = makeElement({
			tag: 'p',
			text: `${param[0].toUpperCase()}${param.substr(1)}: ${labs}`
		});

		const addLabInput = makeElement({
			tag: 'input',
		});

		const addLabButton = makeElement({
			tag: 'button',
			text: `Add ${param[0].toUpperCase()}${param.substr(1)}`,
			onclick: function() {
				const newLab = {};
				newLab[addLabInput.value] = true;
				firebase.database().ref('users').child(uid).child(param).update(newLab);
				comp.textContent += ', ' + addLabInput.value;
			}
		});

		user.appendChild(comp); 
		user.appendChild(addLabInput);
		user.appendChild(addLabButton);

	});

	points.textContent = `Total: ${totalPoints}`;
	usersDiv.appendChild(user);
}