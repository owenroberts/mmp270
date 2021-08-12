/*
	module class
*/

import { makeElement } from './Cool.js';
import SkillTreeDataProvider from './skill-tree-data.js';

const data = SkillTreeDataProvider();
console.log(data);

export default class Module {
	constructor(title, data, markTreeCallback) {

		this.id = data.id;
		this.points = data.points;
		this.parents = data.parents;
		this.children = data.children;
		this.isAvailable = this.parents.length === 0;
		this.isCompleted = false;
		
		this.container = makeElement({
			className: 'module',
		});

		const available = makeElement({
			className: "available",
			text: this.parents.length === 0 ? 
				"Start Here ☟" :
				"Available ",
		});
		this.container.appendChild(available);
		this.availableChecks = {};

		this.parents.forEach(id => {
			const check = makeElement({
				tag: 'input',
				type: 'checkbox',
				title: 'Needs ' + id,
			});
			this.availableChecks[id] = check;
			available.appendChild(check);
		});

		const header = makeElement({
			tag: 'h3',
			className: 'title',
			text: title,
		});

		const video = makeElement({
			className: 'video',
			video: data.video, 
		});

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
		typeContainer.appendChild(typeIcon);

		this.container.appendChild(header);
		this.container.appendChild(typeContainer);
		this.container.appendChild(video);
		this.container.appendChild(points);

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
			title: "Unlocks "
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