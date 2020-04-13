
var colorValue = "1fa2e398d45c67b";

document.querySelector('#btn').addEventListener('click', changeColor);

function changeColor () {
	var color = colorValue.substr(Math.floor(Math.random() * 13), 3);
	document.body.style.backgroundColor = "#" + color;
}