// on page load
document.addEventListener('DOMContentLoaded', () => {

	let count = 0;
	let multiplier = true;

   const scoreLable = document.getElementById('score')

   document.getElementById('cookie').addEventListener('click', () => {
      
   })


	function autoclick(){
		if(multiplier == true){
			scoreLable.innerText = ++count
		}
	}

   setInterval(autoclick, 1000);
   
})
