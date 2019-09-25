// on page load
document.addEventListener('DOMContentLoaded', () => {

	let cookie = 0;
	let bonus = 1;
	let multi = 1;
	let multiPrice = 20;
	let autoCliker = 0;
	let autoClikerPrice = 100;
	const random = () => Math.round(Math.random() * 20)

	const scoreLable = document.getElementById('score');

	const cookieDOM = document.getElementById('cookie')
	cookieDOM.addEventListener('click', () => {
		cookie = cookie === 0 ? multi * bonus : cookie + ( multi * bonus );
		if ( random() === random() ) {
			displayBonus()
		}
	})

	function autoclick(){
		cookie += ( autoCliker *  multi ) * bonus;
	}
	setInterval(autoclick, 1000);

	function displayScore(){
		scoreLable.innerHTML = cookie;
		requestAnimationFrame(displayScore)
	}
	displayScore()

	const btnMulti = document.getElementById('multiplier');
	const spanMulti = btnMulti.querySelector('span')
	btnMulti.addEventListener("click", () => {
		if (cookie < multiPrice) {
			console.log('You need more cookies for multiplier');
		}
		else {
			cookie -= multiPrice;
			multi++;
			multiPrice = Math.round(multiPrice*1.25);
			spanMulti.innerText = `Multiplier x${multi+1} (${multiPrice})`
		}
	})

	const btnAutoClick = document.getElementById('auto-click');
	const spanAutoClick = btnAutoClick.querySelector('span');
	btnAutoClick.addEventListener('click', () => {
		if (cookie < autoClikerPrice) {
			console.log('You need more cookies for auto cliker');
		}
		else {
			cookie -= autoClikerPrice;
			autoCliker++;
			autoClikerPrice = Math.round( autoClikerPrice*1.5 )
			spanAutoClick.innerText = `Auto-click x${autoCliker+1} (${autoClikerPrice})`
		}
	})










	// Bonus
	let bonusTimeout = null;
	let bonusTimer = null;
	let time = 30
	const timer = document.getElementById('timer');

	function resetBonus () {
		bonus = 1;
		clearTimeout(bonusTimeout);
		clearInterval(bonusTimer)
		bonusBtn.classList.add('hidden');
		time = 30

		bonusTimeout = null;
		bonusTimer = null;
		console.log('bonus end');	
	}

	function decrementTime () {
		if (time > 0) {
			time--;
			timer.innerText = time;
		}
	}

	const bonusBtn = document.getElementById('bonus')
	bonusBtn.addEventListener('click', () => {
		console.log('click');		
		if (!bonusTimeout) {
			bonus = 3;
			bonusTimeout = setTimeout(resetBonus, 30000);
			bonusTimer = setInterval(decrementTime,1000);
			decrementTime();
			console.log('bonus start');
		} 
	})

	// display bonus
	let bonusActive = null;
	function displayBonus () {
		bonusBtn.classList.remove('hidden');
		bonusActive = setTimeout(bonusActive, 3000)
	}

	function bonusActive () {
		bonusBtn.classList.add('hidden');
		clearTimeout(bonusActive)
		bonusActive = null;
	}
})

