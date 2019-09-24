// on page load
document.addEventListener('DOMContentLoaded', () => {

	let count = 0;
	let multiplier = true;
	let n = 2;
	const multiPrice = 20;

	const scoreLable = document.getElementById('score');

	document.getElementById('cookie').addEventListener('click', () => {
			count = count === 0 ? 1 : count + n;
	})

	function autoclick(){
		if(multiplier == true){
			++count;
		}
	}

	setInterval(autoclick, 1000);

	function displayScore(){
		scoreLable.innerHTML = count;
		requestAnimationFrame(displayScore)
	}
	displayScore()
	
	

})