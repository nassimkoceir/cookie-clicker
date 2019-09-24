document.addEventListener('DOMContentLoaded', () => {
	let count = 0;
	let multiplier = true;
   document.getElementById('cookie').addEventListener('click', () => {

      console.log(++count);

   })

	 function autoclick(){
		 if(multiplier == true){
			 console.log(++count);
		 }
	 }

	 setInterval(autoclick, 1000);
})
