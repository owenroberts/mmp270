/*
	Section class
*/

import { makeElement } from './Cool.js';
import Module from './Module.js';

export default class Section {
	constructor(title, data, tree) {

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

		this.labs = [];

		for (const m in data.modules) {
			if (data.modules[m].available !== undefined) {
				if (!data.modules[m].available) continue;
			}
			const mod = new Module(this.id, m, data.modules[m], tree);
			this.modules.appendChild(mod.container);
			this.labs[data.modules[m].id] = mod;
		}
	}

	get html() {
		return this.container;
	}

	open(isOpen) {
		if (isOpen || !this.modules.isOpen) {
			this.modules.classList.add('open');
			this.modules.isOpen = true;
			localStorage.setItem(`section-${this.id}-open`, 'open');
		} else {			
			this.modules.classList.remove('open');
			this.modules.isOpen = false;
			localStorage.setItem(`section-${this.id}-open`, 'closed');
		} 
	}

	setAvailable(isAvailable) {
		this.container.style.display = isAvailable ? 'block' : 'none';
	}
}