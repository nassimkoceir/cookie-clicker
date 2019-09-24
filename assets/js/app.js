// on page load
document.addEventListener('DOMContentLoaded', () => {

	let cookie = 0;
	let multi = 1;
	let multiPrice = 20;
	let autoCliker = 0;
	let autoClikerPrice = 5;

	const scoreLable = document.getElementById('score');

	document.getElementById('cookie').addEventListener('click', () => {
			cookie = cookie === 0 ? multi : cookie + multi;
	})

	function autoclick(){
		cookie += autoCliker
	}
	setInterval(autoclick, 1000);

	function displayScore(){
		scoreLable.innerHTML = cookie;
		requestAnimationFrame(displayScore)
	}
	displayScore()

	const btnMulti = document.getElementById('multiplier');
	btnMulti.addEventListener("click", () => {
		if (cookie < multiPrice) {
			console.log('You need more cookies for multiplier');
		}
		else {
			cookie -= multiPrice;
			multi++;
			multiPrice = Math.round(multiPrice*1.25);
			btnMulti.innerText = `Multiplier x${multi+1} (${multiPrice})`
		}
	})

	const btnAutoClick = document.getElementById('auto-click');
	btnAutoClick.addEventListener('click', () => {
		if (cookie < autoClikerPrice) {
			console.log('You need more cookies for auto cliker');
		}
		else {
			cookie -= autoClikerPrice;
			autoCliker++;
			autoClikerPrice = Math.round( autoClikerPrice*1.5 )
			btnAutoClick.innerText = `Auto-click x${autoCliker+1} (${autoClikerPrice})`
		}
	})

})

