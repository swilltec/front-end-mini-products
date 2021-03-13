const quizData = [
    {
        question: "what is the result of 1 + 1?",
        a: "11",
        b: "3",
        c: "4",
        d: "2",
        correct: "d",
    },
    {
        question: "what is the product of 3 and 4?",
        a: "7",
        b: "12",
        c: "20",
        d: "none",
        correct: "b",
    },
    {
        question: "what is the difference of 12 and 8?",
        a: "1",
        b: "6",
        c: "4",
        d: "32",
        correct: "c",
    },
    {
        question: "what is the sum of 101 and 100?",
        a: "212",
        b: "301",
        c: "201",
        d: "300",
        correct: "c",
    },
]

const sumbitBtn = document.getElementById('submit')
const quiz = document.getElementById('quiz')
const a = document.getElementById('a')
const b = document.getElementById('b')
const c = document.getElementById('c')
const d = document.getElementById('d')
const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')



let score = 0
let currentQuiz = 0

loadQuiz()


function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerHTML = currentQuizData.question
    a.nextElementSibling.innerText = currentQuizData.a
    b.nextElementSibling.innerText = currentQuizData.b
    c.nextElementSibling.innerText = currentQuizData.c
    d.nextElementSibling.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}

function getSelected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}


sumbitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2> You answered ${score}
            /${quizData.length} question correctly </h2>
            
            <button onclick="location.reload()">
            Reload </button>`
        }
    }

} )