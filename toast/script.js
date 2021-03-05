const button = document.querySelector('#button')
const toasts = document.querySelector('#toasts')

const messages = [
    "message one",
    "message two",
    "message three",
    "message four"
]

button.addEventListener('click', () => createNotification())

function createNotification(){
    const toastEl = document.createElement('div')
    toastEl.classList.add('toast')
    toastEl.innerHTML = messages[Math.floor(Math.random()*messages.length)]
    toasts.appendChild(toastEl)

    setTimeout(() => {
        toastEl.remove()
    }, 5000);
    
}
