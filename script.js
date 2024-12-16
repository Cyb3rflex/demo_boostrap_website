var richie = document.querySelector('.menu')
const misturatuuu = document.querySelector('.close')
const kenny = document.querySelector('.left__listing')

richie.onclick = function(){
    kenny.style.left = 0
}

misturatuuu.onclick = function(){
    kenny.style.left = '-300px'
}