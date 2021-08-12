/*
	some cool untiliies
*/

function makeElement(params) {
	const { tag, text, className, id, onclick, href, type, title } = params;
	const elem = document.createElement(tag || 'div');
	if (text) elem.textContent = text;
	if (id) elem.id = id;
	if (className) {
		className.split(' ').forEach(cn => {
			elem.classList.add(cn);
		});
	}
	if (onclick) elem.addEventListener('click', onclick, false);
	if (type) elem.type = type;
	if (title) elem.title = title;
	if (href) { 
		elem.href = href;
		elem.target = '_blank';
	}

	return elem;
}

function getElement(id) {
	return document.getElementById(id);
}

export { makeElement, getElement };