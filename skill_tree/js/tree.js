/*
	builds skill tree
*/

import Section from './Section.js';
import SkillTreeDataProvider from './skill-tree-data.js';

const data = SkillTreeDataProvider();
const main = document.getElementById('main');
const skillTree = [];


for (const sectionTitle in data) {
	let section = new Section(sectionTitle, data[sectionTitle], markTree);
	skillTree[data[sectionTitle].id] = section;
	main.appendChild(section.html);
	if (sectionTitle === 'Apprentice') section.open();
}

markTree();

function markTree() {
	skillTree.forEach(section => {
		section.skillTree.forEach(mod => {
			const { parents, children } = mod;

			for (let i = 0; i < parents.length; i++) {
				const id = parents[i];
				const [s, m] = id.split('.');
				if (skillTree[s].skillTree[m].isCompleted) {
					mod.markAvailable(id);
				}
			}

		});
	});
}


