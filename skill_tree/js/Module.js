/*
	module class
*/

import { makeElement } from './Cool.js';
import SkillTreeDataProvider from './skill-tree-data.js';

const skillTreeData = SkillTreeDataProvider();
const skillTree = {};
for (const sectionTitle in skillTreeData) {
	const section = skillTreeData[sectionTitle];
	for (const modTitle in section.modules) {
		const mod = section.modules[modTitle];
		skillTree[section.id + '-' + mod.id] = `${sectionTitle} ~ ${modTitle}`;
	}
}

export default class Module {
	constructor(parentId, title, data, markTreeCallback) {

		this.id = data.id;
		this.points = data.points;
		this.parents = data.parents;
		this.children = data.children;
		this.isAvailable = false
		this.isCompleted = false;
		
		this.container = makeElement({
			className: 'module',
		});

		const available = makeElement({
			className: "available",
			text: this.parents.length === 0 ? 
				"0.0 Start Here ☟" :
				`${parentId}.${this.id} Available`,
		});
		this.container.appendChild(available);
		this.availableChecks = {};

		this.parents.forEach(id => {
			const check = makeElement({
				tag: 'input',
				type: 'checkbox',
				title: id.includes('@') ?
					'One from Art, Dev, Design or Sound' :
					'Requires ' + skillTree[id],
			});
			this.availableChecks[id] = check;
			available.appendChild(check);
		});

		const header = makeElement({
			tag: 'h3',
			className: 'title',
		});

		const link = makeElement({
			tag: 'a',
			className: 'link',
			text: title,
			href: data.link
		})

		const points = makeElement({
			tag: 'p',
			className: 'points',
			text: 'Points: ' + data.points,
		});

		const typeContainer = makeElement({
			className: 'type',
		});
		const typeIcon = new Image();
		if (data.type === 'Open Lab') typeIcon.src = './icons/openlab_icon.png';
		if (data.type === 'Godot') typeIcon.src = './icons/godot_icon.png';
		if (data.type === 'Art') typeIcon.src = './icons/art_icon.png';
		if (data.type === 'Audio') typeIcon.src = './icons/audio_icon.png';
		if (data.type === 'Itch') typeIcon.src = './icons/itch_icon.png';
		typeContainer.appendChild(typeIcon);

		const dek = makeElement({
			tag: 'p',
			className: 'dek',
			text: data.dek,
		});

		this.container.appendChild(header);
		this.container.appendChild(typeContainer);
		this.container.appendChild(points);
		header.appendChild(link);
		header.appendChild(dek);


		const completed = makeElement({
			className: "completed",
			text: "Completed ",
			onclick: () => {
				if (this.isCompleted) this.markCompleted(false);
				else this.markCompleted(true);
				markTreeCallback();
			}
		});

		this.completedCheck = makeElement({
			tag: 'input',
			type: 'checkbox',
			title:  this.children ? 
				'Unlocks ' + this.children.map(id => { return `${skillTree[id]}`; }).join(', ') :
				'',
		});

		completed.appendChild(this.completedCheck);
		this.container.appendChild(completed);


		// this.modules.appendChild(mc);
	}

	markAvailable(id, isAvailable) {
		this.availableChecks[id].checked = isAvailable;
		this.isAvailable = isAvailable;
	}

	markCompleted(isComplete) {
		this.isCompleted = isComplete;
		this.completedCheck.checked = isComplete;
	}
}