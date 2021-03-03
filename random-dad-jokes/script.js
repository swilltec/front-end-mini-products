const  jokeEl = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

// using async await
async function fetchJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke

}

//using .then()
// function fetchJoke(){
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then(data =>{
//         jokeEl.innerHTML = data.joke
        
//     })
// }

fetchJoke()

jokeBtn.addEventListener('click', fetchJoke)
