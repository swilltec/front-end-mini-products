const APIURL = 'https://api.github.com/users/'
const form = document.querySelector('#form')
const searh = document.querySelector('#search')
const main = document.querySelector('#main')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const user = search.value
    
    if (user) {
        getUser(user)
        search.value = ''
    }
})

function createUserCard(user) {
    const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" class="avatar" alt="${user.name}">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>
            <div id="repos">
            
            </div>
        </div>
    </div>`

    main.innerHTML = cardHTML
        
}

function createErrorCard(msg){
   const  cardHTML = `
   <div class="card">
        <h1>${msg}</h1>
    </div>
   `
   main.innerHTML = cardHTML
}
    
async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
        createUserCard(data)
        getRepos(username)
    } catch (err) {
        if(err.response.status === 404){
            createErrorCard('No profile with this username')

        }
    }

}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos')

    repos.forEach( repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    })
}
 
async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + 
            username + '/repos?sort=created')
        addReposToCard(data)
    } catch (err) {
        createErrorCard('problem fetching repos')
    }

}