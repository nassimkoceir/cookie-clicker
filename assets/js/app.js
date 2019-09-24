// on page load
document.addEventListener('DOMContentLoaded', () => {

	let count = 0;
	let multiplier = true;

   const scoreLable = document.getElementById('score')

   document.getElementById('cookie').addEventListener('click', () => {
      scoreLable.innerText = ++count
   })


	function autoclick(){
		if(multiplier == true){
			 console.log(++count);
		}
	}

	setInterval(autoclick, 1000);
})
