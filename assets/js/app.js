// on page load
document.addEventListener('DOMContentLoaded', () => {
   
   let count = 0
   const scoreLable = document.getElementById('score')

   document.getElementById('cookie').addEventListener('click', () => {
      scoreLable.innerText = ++count
   })


})

