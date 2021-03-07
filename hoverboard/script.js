const container = document.getElementById('container')

const colors = ['pink', 'red', 'browm', 'green', 'purple', 'orange']

const SQUARES = 500

for(let i = 0; i < SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> setColor(square))
    square.addEventListener('mouseout', ()=> removeColor(square))

    container.appendChild(square)
}
function removeColor(element){
    const color = 'white'
    element.style.background = color
    element.style.boxShadow = `0 0 2px, white`
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px, ${color}, 0 0 10px, ${color}`
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}