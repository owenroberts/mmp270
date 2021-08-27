/*
	builds skill tree
*/

import Section from './Section.js';
import SkillTreeDataProvider from './skill-tree-data.js';
import { getElement } from './Cool.js';

const data = SkillTreeDataProvider();
const main = getElement('main');
const pointsSpan = getElement('points-number');
const skillTree = [];
let completed = {};
let totalPoints = 0;
pointsSpan.textContent = totalPoints;

const isPlan = location.href.includes('plan');

for (const sectionTitle in data) {
	let section = new Section(sectionTitle, data[sectionTitle], markTree);
	skillTree[data[sectionTitle].id] = section;
	main.appendChild(section.html);
	if (sectionTitle === 'Apprentice') section.open();
}

function markTree() {
	totalPoints = 0;
	skillTree.forEach(section => {
		section.skillTree.forEach(mod => {
			const { parents, children } = mod;
			const id = section.id + '-' + mod.id;

			// console.log(id, completed[id])

			// if (completed[id]) mod.markCompleted(true);
			if (skillTree[section.id].skillTree[mod.id].isCompleted) {
				totalPoints += mod.points;
				setCompleteStatus(id, true);
			} else {
				setCompleteStatus(id, false);
			}


			for (let i = 0; i < parents.length; i++) {
				const pid = parents[i];

				if (pid.includes('@')) {
					const keys = Object.keys(completed).filter(k => +k.charAt(0) > 0);
					if (keys.length > i) mod.markAvailable('@' + i, true);
					continue;
				}

				const [s, m] = pid.split('-');
				if (skillTree[s].skillTree[m].isCompleted) {
					mod.markAvailable(pid, true);
				} else {
					mod.markAvailable(pid, false);
				}
			}
		});
	});
	pointsSpan.textContent = totalPoints;
}

let uid;
firebase.auth().onAuthStateChanged(user => {
	if (user) {
		const userRef = firebase.database().ref('users').child(user.uid);
		uid = user.uid;
		userRef.once('value', snapshot => {
			const userInfo = snapshot.val();
			let copy = isPlan ? userInfo.plan : userInfo.completed;
			for (const k in copy) {
				completed[k] = copy[k];
				if (copy[k]) {
					let [s, m] = k.split('-');
					skillTree[s].skillTree[m].markCompleted(true);
				}
			}
			markTree();
		});	
	}
});

function setCompleteStatus(id, isComplete) {
	if (completed[id] === isComplete) return;
	
	completed[id] = isComplete;

	if (isPlan && uid) {
		let update = {};
		update[id] = isComplete;
		const up = firebase.database().ref('users').child(uid).child('plan').update(update);
		// up.then(snapshot => { console.log(snapshot)});
		// up.catch(error => { console.log(error)});
	}

	if (!isComplete && isPlan) {
		let mod = getMod(id);
		if (mod.children) {
			mod.children.forEach(childId => {
				let child = getMod(childId);
				if (child.isCompleted) child.markCompleted(false);
			});
		}
	}
}

function getMod(id) {
	let [s, m] = id.split('-');
	return skillTree[s].skillTree[m];
}


/* grade scale */
const gradeScale = getElement('grade-scale');
const gradeScaleMod = getElement('grade-scale-mod');
gradeScale.isOpen = false;
gradeScale.onclick = function() {
	if (gradeScale.isOpen) gradeScaleMod.classList.remove('open');
	else gradeScaleMod.classList.add('open');
	gradeScale.isOpen = !gradeScale.isOpen;
};


