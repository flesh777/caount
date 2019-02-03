var inputText = document.querySelector('#get-text'),
	outputText = document.querySelector('#set-text'),
	sum = document.querySelector('#count-letters'),
	reset = document.querySelector('#reset');

function print(link, text) {
	link.innerHTML = text;
}

function clean() {
	inputText.value = '';
	outputText.innerHTML = '';
	sum.innerHTML = 0;
	sum.style.color = 'black';
}

function init(event) {
	var text = event.target.value;
	var length = text.length;
	sum.style.color = length >= 200 ? 'red' : 'green';
	print(sum, length);
	print(outputText, text);
}

inputText.addEventListener('keyup', init);
reset.addEventListener('click', clean);
