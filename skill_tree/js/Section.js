/*
	Section class
*/

import { makeElement } from './Cool.js';
import Module from './Module.js';

export default class Section {
	constructor(title, data, markTreeCallback) {

		this.id = data.id;

		this.container = makeElement({
			id: `${title.replaceAll(' ', '-')}-container`,
			className: 'section',
		});

		const heading = makeElement({
			tag: 'h1',
			className: 'title',
			text: title,
			onclick: () => {
				this.open();
			}
		});

		this.modules = makeElement({
			className: 'modules hidden',
		});
		this.modules.isOpen = false;

		this.container.appendChild(heading);
		this.container.appendChild(this.modules);

		this.skillTree = [];

		for (const m in data.modules) {
			const mod = new Module(this.id, m, data.modules[m], markTreeCallback);
			this.modules.appendChild(mod.container);
			this.skillTree[data.modules[m].id] = mod;
		}
	}

	get html() {
		return this.container;
	}

	open() {
		if (this.modules.isOpen) {
			this.modules.classList.remove('open');
			this.modules.isOpen = false;
		} else {
			this.modules.classList.add('open');
			this.modules.isOpen = true;
		} 
	}
}