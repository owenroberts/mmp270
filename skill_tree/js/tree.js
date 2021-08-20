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
			// for testing
			if (skillTree[section.id].skillTree[mod.id].isCompleted) completed[id] = true;
			if (completed[id]) totalPoints += mod.points;

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

/* grade scale */
const gradeScale = getElement('grade-scale');
const gradeScaleMod = getElement('grade-scale-mod');
gradeScale.isOpen = false;
gradeScale.onclick = function() {
	if (gradeScale.isOpen) gradeScaleMod.classList.remove('open');
	else gradeScaleMod.classList.add('open');
	gradeScale.isOpen = !gradeScale.isOpen;
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


