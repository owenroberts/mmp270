import SkillTreeDataProvider from './skill-tree-data.js';
import Section from './Section.js';
import { getElement } from './Cool.js';

export default class SkillTree {
	constructor(isPlan) {
		this.isPlan = isPlan;
		this.tiers = [];
		this.points = 0;
		this.pointsSpan = getElement('points-number');

		const main = getElement('tier-container');

		// set up skill tree tiers and labs
		const data = SkillTreeDataProvider();
		for (const sectionTitle in data) {
			const { id } = data[sectionTitle];
			this.tiers[id] = new Section(sectionTitle, data[sectionTitle], this);
			main.appendChild(this.tiers[id].html);

			// use local storage to show previously open sections
			const isOpen = localStorage.getItem(`section-${id}-open`);
			if (isOpen === 'open') this.tiers[id].open(true);

			// if nothing is stored in localStorage, open apprentice section
			if (sectionTitle === 'Apprentice' && !isOpen) this.tiers[id].open(true);
		}

	}

	addUserData(userData, uid) {
		this.uid = uid;
		const params = this.isPlan ? ['plan'] : ['completed', 'bonus', 'collab'];

		// loop through params and save the data
		params.forEach(param => {
			for (const id in userData[param]) {
				const lab = this.getLab(id);
				if (lab && (this.isPlan || param === 'completed') && userData[param][id]) {
					lab.markCompleted(true);
					this.showChildLabs(id, true);
					this.setPoints(id, true);
				}
			}
		});

		// show apprentice tier
		this.tiers[0].labs[0].container.style.display = 'grid';
	}

	setPoints() {
		const points = this.tiers.flatMap(tier => {
			return tier.labs.map(lab => lab.getPoints())
		}).reduce((a, b) => a + b);
		this.pointsSpan.textContent = points;
	}

	getLab(id) {
		const [tierId, labId] = id.split('-');
		if (isNaN(+tierId) || isNaN(+labId)) return false;
		if (!this.tiers[tierId]) return false;
		if (!this.tiers[tierId].labs[labId]) return false;
		return this.tiers[tierId].labs[labId];
	}

	showChildLabs(id, isCompleted, wasClicked) {
		let childLabs = this.tiers.flatMap(tier => {
			return tier.labs.filter(lab => {
				return lab.parents.includes(id);
			});
		});

		childLabs.forEach(lab => {
			lab.markAvailable(null, isCompleted);
			if (isCompleted && wasClicked) this.tiers[lab.parentId].open(true);
		});

		return childLabs;
	}

	update(id, isCompleted, wasClicked) {
		// get labs that have id as parent
		const childLabs = this.showChildLabs(id, isCompleted, wasClicked);
		if (this.isPlan && this.uid) {
			const update = {};
			update[id] = isCompleted;
			firebase.database().ref('users').child(this.uid).child('plan').update(update);

			if (!isCompleted) {
				childLabs.forEach(lab => {
					lab.markCompleted(false);
					this.update(lab.idString, false, false);
				});
			}
		}
		this.setPoints();
	}

}