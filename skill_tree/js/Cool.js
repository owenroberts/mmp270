/*
	some cool untiliies
*/

function makeElement(params) {
	const { tag, text, className, id, onclick, video, type, title } = params;
	const elem = document.createElement(tag || 'div');
	if (text) elem.textContent = text;
	if (id) elem.id = id;
	if (className) elem.classList.add(className);
	if (onclick) elem.addEventListener('click', onclick, false);
	if (type) elem.type = type;
	if (title) elem.title = title;

	if (video) {
		const icon = makeElement({
			tag: 'a',
			className: 'video-icon',
		});
		icon.href = video;
		const img = new Image();
		img.src = './icons/youtube_icon.png';
		icon.appendChild(img);
		elem.appendChild(icon);
	}

	return elem;

}

export { makeElement };