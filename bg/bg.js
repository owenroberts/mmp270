window.addEventListener('load', function() {
	String.prototype.replaceAt = function(index, character) {
    	return this.substr(0, index) + character + this.substr(index+character.length);
	}

	const titles = ["😬", "😑", "🌚", "😞", "😤"];
	var time = 500;
	var timer = performance.now();
	
	function loop() {
		requestAnimationFrame(loop);
		if (performance.now() > timer + time) {
			timer = performance.now();
			document.title = titles[Math.floor(Math.random() * titles.length)];
		}
	};
	requestAnimationFrame(loop);
});
