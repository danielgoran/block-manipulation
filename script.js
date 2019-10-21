window.onload = function(){
	let block = document.getElementById('block');

	// Pos Y manipulation
	let posY = document.getElementById('pos-y');
	posY.onchange = function(){
		block.style.top = posY.value+'px';
	}

	// Pos X manipulation
	let posX = document.getElementById('pos-x');
	posX.onchange = function(){
		block.style.left = posX.value+'px';

	}

	// Pos X manipulation
	let size = document.getElementById('size');
	size.onchange = function(){
		block.style.transform = 'scale('+size.value+')';

	}
}