// on page load
document.addEventListener('DOMContentLoaded', () => {

	let count = 0;
	let multiplier = true;

  const scoreLable = document.getElementById('score');

  document.getElementById('cookie').addEventListener('click', () => {
		++count;
  })

	function autoclick(){
		if(multiplier == true){
			++count;
		}
	}

	setInterval(autoclick, 1000);

	function displayScore(){
		scoreLable.innerHTML = count;
	}

	setInterval(displayScore, 200);
})
