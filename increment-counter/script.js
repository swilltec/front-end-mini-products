const counters = document.querySelectorAll('.counter')

counters.forEach( counter => {
    counter.innerHTML = '0'

    const updateCounter = () => {
        // const target = counter.dataset.target
        const target = +counter.getAttribute('data-target')
        const innerText = +counter.innerHTML

        const increment = target / 300

        if(innerText < target){
            counter.innerHTML = `${Math.ceil(innerText + increment)}`
            setTimeout(updateCounter, 1);
        }else {
            counter.innerHTML = target
        }

    }

    updateCounter()

})