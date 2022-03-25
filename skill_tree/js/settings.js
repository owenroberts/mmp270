import { getElement } from './Cool.js';
const highContrastCheckBox = getElement('high-contrast');
let isHighContrast = localStorage.getItem('high_contrast') === 'true';

function update() {
	if (isHighContrast) {
		document.body.classList.add('high-contrast');
		highContrastCheckBox.checked = true;
		localStorage.setItem('high_contrast', true);
	} else {
		document.body.classList.remove('high-contrast');
		highContrastCheckBox.checked = false;
		localStorage.setItem('high_contrast', false);
	}
}
update();

highContrastCheckBox.addEventListener('change', ev => {
	isHighContrast = highContrastCheckBox.checked;
	update();
});

highContrastCheckBox.addEventListener('keydown', ev => {
	if (ev.which == 13) {
		isHighContrast = highContrastCheckBox.checked ? false : true; // toggle
		update();
	}
});