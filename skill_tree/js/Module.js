/*
	module class
*/

import { makeElement } from './Cool.js';

export default class Module {
	constructor(parentId, title, data, tree) {

		this.id = data.id;
		this.parentId = parentId;
		this.idString = `${parentId}-${data.id}`;
		this.points = data.points;
		this.parents = data.parents;
		this.children = data.children;
		this.isAvailable = parentId === 0 && data.id === 0 ? true : false;
		this.isCompleted = false;
		this.collab = false;
		
		this.container = makeElement({
			className: 'module',
		});

		const header = makeElement({
			tag: 'h3',
			className: 'title',
		});

		const labContainer = document.getElementById('lab-container');
		const labFrame = document.getElementById('lab-frame');
		let labIsOpen = false;
		const link = makeElement({
			tag: 'a',
			className: 'link',
			text: title,
			// href: data.link,
			onclick: function() {
				if (labIsOpen) {
					labContainer.classList.remove('open');
					header.classList.remove('open');
				} else {
					labFrame.src = `../labs/${data.link}.html`;
					labContainer.classList.add('open');
					header.classList.add('open');
				}
				labIsOpen = !labIsOpen;
			}

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
		if (data.type === 'Audio') typeIcon.src = './icons/audio_icon.png';
		if (data.type === 'Itch') typeIcon.src = './icons/itch_icon.png';
		if (data.type === 'Reading') typeIcon.src = './icons/reading_icon.png';

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
		// header.appendChild(dek);

		if (data.collab) {
			const collabTainer = makeElement({
				className: 'collab',
			});

			const collab = makeElement({
				tag: 'span',
				text: "Collaboration",
			});

			this.collabCheck = makeElement({
				tag: 'input',
				type: 'checkbox',
				title: title,
			});

			collabTainer.appendChild(collab);
			collabTainer.appendChild(this.collabCheck);
			this.container.appendChild(collabTainer);
		}

		if (data.research) {
			const researchLink = makeElement({
				tag: 'a',
				className: 'resource',
				text: 'Source Link',
				external: data.research
			});
			this.container.appendChild(researchLink);
		}

		const completed = makeElement({
			className: "completed",
			text: "Completed ",
		});

		let clickCount = 0;
		this.completedCheck = makeElement({
			tag: 'input',
			type: 'checkbox',
			title:  this.children ? 
				'Unlocks ' + this.children.map(id => { return `${tree[id]}`; }).join(', ') :
				'',
			onclick: ev => {
				if (this.isCompleted) this.markCompleted(false); // checked off
				else if (this.isAvailable) this.markCompleted(true);
				tree.update(this.idString, this.isCompleted, true);

				if (!this.isAvailable) {
					this.completedCheck.checked = false;
					clickCount++;
				}

				if (clickCount >= 3) {
					alert(title + " is not available.  Complete " + this.parents.map(id => skillTree[id]).join(', ') + ' first.');
					clickCount = 0;
				}
			}
		});

		completed.appendChild(this.completedCheck);
		this.container.appendChild(completed);
	}

	markAvailable(id, isAvailable) {
		// this.availableChecks[id].checked = isAvailable;
		this.container.style.display = isAvailable ? 'grid' : 'none';
		this.isAvailable = isAvailable;
	}

	markCompleted(isComplete) {
		this.isCompleted = isComplete;
		this.completedCheck.checked = isComplete;
	}

	mark(param) {
		this[`${param}Check`].checked = true;
		this[param] = true;
	}

	getPoints() {
		if (!this.isCompleted) return 0;
		let points = this.points;
		if (this.bonus) points += 1;
		if (this.collab) points += 1;
		return points;
	}
}