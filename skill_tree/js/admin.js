import { getElement, makeElement } from './Cool.js';
import SkillTreeDataProvider from './skill-tree-data.js';

const semester = location.search.split('=')[1] || 'Spring22';

const tree = SkillTreeDataProvider();
const pointsTree = [];
const tiers = Object.keys(tree);
for (let i = 0; i < tiers.length; i++) {
	const tier = tiers[i];
	const modules = Object.keys(tree[tier].modules);
	for (let j = 0; j < modules.length; j++) {
		const mod = modules[j];
		if (!pointsTree[i]) pointsTree[i] = [];
		let designerOffset = 0;
		if (i === 3 && j > 3) designerOffset = 1;		
		pointsTree[i][j + designerOffset] = tree[tier].modules[mod].points;
	}
}

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
	const usersRef = firebase.database().ref('users').orderByChild('semester').equalTo(semester);
	usersRef.once('value', snapshot => {
		snapshot.forEach(user => {
			displayUser(user.key, user.val())
		});
	});
}

function displayUser(uid, data) {

	// if (data.displayName !== "James Rodriguez") return;
	// if (data.displayName !== "BenRosenblum") return;


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

	const lists = {};
	

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
					if (i && j) {
						if (!pointsTree[+i][+j]) {
							console.log(uid, data.displayName, i, j, totalPoints, pointsTree[+i][+j])
						} else {
							totalPoints += pointsTree[+i][+j];
						}
					}
				}
			})
			labs = labs.join(', ');	
		}

		const comp = makeElement({
			tag: 'p',
			text: `${param[0].toUpperCase()}${param.substr(1)}: ${labs}`,
			className: `${param}-list`
		});
		user.appendChild(comp); 
		lists[param] = comp;

	});

	// console.log(tree)

	const tierSelector = makeElement({ tag: 'select'});
	const labSelectors = {};
	user.appendChild(tierSelector);
	user.appendChild(makeElement({tag: 'br'}));

	tierSelector.onchange = function() {

		for (let k in labSelectors) {
			labSelectors[k].style.display = 'none';
		}
		labSelectors[tierSelector.value].style.display = 'inline-block';
	};

	for (const t in tree) {
		const option = makeElement({ tag: 'option', text: `${tree[t].id} ${t}` });
		option.value = tree[t].id;
		tierSelector.appendChild(option);

		const labSelector = makeElement({ tag: 'select', id: `${tree[t].id}-labs`, className: 'labs'});
		user.appendChild(labSelector);
		labSelectors[tree[t].id] = labSelector;
		if (tree[t].id !== 0) labSelector.style.display = 'none';
		for (const l in tree[t].modules) {
			const option = makeElement({ tag: 'option', text: `${tree[t].modules[l].id} ${l}` });
			option.value = `${tree[t].id}-${tree[t].modules[l].id}`;
			labSelector.appendChild(option);
		}
	}

	user.appendChild(makeElement({tag: 'br'}));
	['completed', 'bonus', 'collab'].forEach(param => {
		const addLabButton = makeElement({
			tag: 'button',
			text: `Add ${param[0].toUpperCase()}${param.substr(1)}`,
			onclick: function() {
				const newLab = {};
				const selection = labSelectors[tierSelector.value].value;
				newLab[selection] = true;
				firebase.database().ref('users').child(uid).child(param).update(newLab);
				lists[param].textContent += ', ' + selection.replace('-', '.');
				const [i, j] = selection.split('-');
				if (i && j) {
					totalPoints += pointsTree[+i][+j];
					points.textContent = `Total points: ${totalPoints}`;
				}
			}
		});
		user.appendChild(addLabButton);

	});

	points.textContent = `Total points: ${totalPoints}`;
	usersDiv.appendChild(user);
}

const updateDatabaseButton = makeElement({ tag: 'button', text: 'Update Database' });
document.body.appendChild(updateDatabaseButton);
updateDatabaseButton.addEventListener('click', updateDatabase);

let labId = ['3-7', '5-2'];
let type = 'completed';

function updateDatabase() {

	const uRef = firebase.database().ref('users');

	uRef.orderByChild(`${type}/${labId[0]}`).equalTo(true).once('value', snap => { const users = snap.val();
		for (const uid in users) {
			console.log(uid, users[uid])
			let update = {};
			update[labId[1]] = true;
			uRef.child(uid).child(type).update(update);
		}
	});
}