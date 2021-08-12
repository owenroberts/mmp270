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
let completed;
let totalPoints = 0;

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
			if (completed[id]) mod.markCompleted(true);
			if (completed[id] || skillTree[section.id].skillTree[mod.id].isCompleted) 
				totalPoints += mod.points;

			for (let i = 0; i < parents.length; i++) {
				const pid = parents[i];
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

firebase.auth().onAuthStateChanged(user => {
	if (user) {
		const userRef = firebase.database().ref('users').child(user.uid);
		userRef.on('value', snapshot => {
			const userInfo = snapshot.val();
			completed = userInfo.completed;
			markTree();
		});	
	}
});


