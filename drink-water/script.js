const smallCups = document.querySelectorAll('.cup-small')
const litres = document.querySelector('#liters')
const percentage = document.querySelector('#percentage')
const remained = document.querySelector('#remained')


function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0){
        percentage.getElementsByClassName.visibility = 'hidden'
        percentage.getElementsByClassName.height = 0
    }else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerHTML =  `${fullCups / totalCups * 100}%0`
    }

    if(fullCups === totalCups ){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else {
        remained.style.visibility = 'visible'
        litres.innerHTML = `${2-(500 * fullCups / 1000)}L`
    }

}

updateBigCup()

function highlightCups(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups
    [idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}



smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', ()=> highlightCups(idx))
})