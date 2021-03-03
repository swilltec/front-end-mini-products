const tagsEL = document.querySelector('#tags')
const textarea = document.querySelector('#textarea')

textarea.focus()


function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()
        !== '').map(tag => tag.trim())

    tagsEL.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEL.appendChild(tagEl)
    });

}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function randomSelect() {
    const times = 30
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() =>{
        clearInterval(interval)
        const randomTag = pickRandomTag()
        highlightTag(randomTag)

    }, times * 100)

}

function highlightTag(tag) {
    tag.classList.add('highlight')
}
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}


textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})
