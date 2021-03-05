const header = document.getElementById('header')
const title = document.getElementById('title')
const excert = document.getElementById('excert')
const profileImg = document.getElementById('profile-img')
const nameEl = document.getElementById('name')
const date = document.getElementById('date')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgTexts = document.querySelectorAll('.animated-bg-text')

function getData() {
    header.innerHTML = `
    <img src="https://images.unsplash.com/photo-1612147552704-52e1858c7c47?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="">`
    title.innerHTML = `Lorem ipsum dolor sit amet.`
    excert.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium iste voluptatum id nemo consectetur null`
    profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/46.jpg" alt="">`
    nameEl.innerHTML = `John Doe`
    date.innerHTML = `Oct, 8 2020`
    
    animatedBgs.forEach((bg) => {
        bg.classList.remove('animated-bg')
        bg.classList.remove('animated-bg-text')
    })
}
getData()