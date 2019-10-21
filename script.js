window.onload = function(){
	let block = document.getElementById('block');

	// Pos Y manipulation
	let posY = document.getElementById('pos-y');
	posY.onchange = function(){
		block.style.top = posY.value+'px';
	}
}