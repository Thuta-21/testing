var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("body");
var rad = document.getElementById("b");
var showCase = document.getElementById('show-color');

function colorGen1 () {
	var rad_C = '';
	var container = 'Ffebc0123456789';
	for (var i = 0; rad_C.length < 6; i++) {
		rad_C += container.charAt(Math.floor(Math.random() * container.length));
	};

	return rad_C;
}

function colorGen2 () {
	var rad_C = '';
	var container = 'Ffebc0123456789';
	for (var i = 0; rad_C.length < 6; i++) {
		rad_C += container.charAt(Math.floor(Math.random() * container.length));
	};

	return rad_C;
}

function show_C (color1, color2) {
	var c_name = document.createTextNode(color1 + ',' + ' ' + color2);
	showCase.appendChild(c_name)
}

color1.addEventListener("input", () => {
	body.style.background = 'linear-gradient(to right,' + color1.value + ',' + color2.value + ')';
	showCase.innerHTML = '';
	show_C (color1.value, color2.value);
});

color2.addEventListener("input", () => {
	body.style.background = 'linear-gradient(to right,' + color1.value + ',' + color2.value + ')';
	showCase.innerHTML = '';
	show_C (color1.value, color2.value);
});

rad.addEventListener('click', () => {
	var c1 = '#' + colorGen1().toLowerCase();
	var c2 = '#' + colorGen2().toLowerCase();
	color1.value = c1;
	color2.value = c2;
	body.style.transition = 'background 5s linear 1s';
	body.style.background = 'linear-gradient(to right,' + c1 + ',' +  c2 + ')';
	showCase.innerHTML = '';
	show_C (c1, c2);
});
