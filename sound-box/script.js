const  sounds = ['alert1', 'alert2', 'alert3', 'alert4', 'alert5', 'alert6']

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    document.getElementById('buttons').appendChild(btn)
})

