/*
	builds skill tree
*/

import SkillTree from './SkillTree.js';
import { getElement } from './Cool.js';

const isPlan = location.href.includes('plan');
const tree = new SkillTree(isPlan, main);

// load user data
firebase.auth().onAuthStateChanged(user => {
	if (user) {
		const userRef = firebase.database().ref('users').child(user.uid);
		userRef.once('value', snapshot => {
			tree.addUserData(snapshot.val(), user.uid);
		});
	}
});

/* grade scale */
const gradeScale = getElement('grade-scale');
const gradeScaleMod = getElement('grade-scale-mod');
gradeScale.isOpen = false;
gradeScale.onclick = function() {
	if (gradeScale.isOpen) gradeScaleMod.classList.remove('open');
	else gradeScaleMod.classList.add('open');
	gradeScale.isOpen = !gradeScale.isOpen;
};


