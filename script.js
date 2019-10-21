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

	// Size manipulation
	let size = document.getElementById('size');
	size.onchange = function(){
		block.style.transform = 'scale('+size.value+')';

	}

	// Opacity manipulation
	let opacity = document.getElementById('opacity');
	opacity.onchange = function(){
		block.style.opacity = opacity.value;

	}

	// Shape manipulation
	let selector = document.getElementById('shape-select');
	let okButton = document.getElementById('ok-shape');
	okButton.onclick = function(){
		let option = selector.value;
		if(option === '1'){
			block.style.borderRadius = '0';
			block.style.transform = 'rotate(0deg)';
		}else if(option === '2'){
			block.style.borderRadius = '50%';
		}else if(option === '3'){
			block.style.borderRadius = '0';
			block.style.transform = 'rotate(45deg)';
		}
	}

	// HEX manipulation
	let hex = document.getElementById('hex');
	hex.onkeypress = function(e){
		if(e.which === 13){
			block.style.backgroundColor = '#'+hex.value;
		}
	}
}
































