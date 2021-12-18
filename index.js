let text = document.querySelector('.text')
let increase = document.querySelector('.increase')
let reset = document.querySelector('.reset')
let decrease = document.querySelector('.decrease')
let count = 0 ; 
increase.addEventListener('click', increaseto)
decrease.addEventListener('click', decreaseto)
reset.addEventListener('click', resetto)
function increaseto(){
  count ++; 
  text.innerHTML = count
}