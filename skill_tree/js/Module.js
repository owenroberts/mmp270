/*
	module class
*/

import { makeElement } from './Cool.js';

export default class Module {
	constructor(title, data, markTreeCallback) {

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

		const info = makeElement({
			className: 'info',
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

		info.appendChild(header);
		info.appendChild(typeContainer);
		info.appendChild(video);
		info.appendChild(points);
		this.container.append(info);

		const completed = makeElement({
			className: "completed",
			text: "Completed ",
			onclick: () => {
				this.markComplete();
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

	markAvailable(id) {
		this.availableChecks[id].checked = true;
	}

	markComplete() {
		this.isCompleted = true;
		this.completedCheck.checked = true;
	}
}