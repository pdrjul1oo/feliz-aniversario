const button = document.querySelector("#carta1")
const modal = document.querySelector("#msg1")
const buttonClose = document.querySelector("#buttonClose")

button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}

const button2 = document.querySelector("#carta2")
const modal2 = document.querySelector("#msg2")
const buttonClose2 = document.querySelector("#buttonClose2")

button2.onclick = function () {
    modal2.showModal()
}

buttonClose2.onclick = function () {
    modal2.close()
}

const button3 = document.querySelector("#carta3")
const modal3 = document.querySelector("#msg3")
const buttonClose3 = document.querySelector("#buttonClose3")

button3.onclick = function () {
    modal3.showModal()
}

buttonClose3.onclick = function () {
    modal3.close()
}

const button4 = document.querySelector("#carta4")
const modal4 = document.querySelector("#msg4")
const buttonClose4 = document.querySelector("#buttonClose4")

button4.onclick = function () {
    modal4.showModal()
}

buttonClose4.onclick = function () {
    modal4.close()
}

const button5 = document.querySelector("#carta5")
const modal5 = document.querySelector("#msg5")
const buttonClose5 = document.querySelector("#buttonClose5")

button5.onclick = function () {
    modal5.showModal()
}

buttonClose5.onclick = function () {
    modal5.close()
}

const button6 = document.querySelector("#carta6")
const modal6 = document.querySelector("#msg6")
const buttonClose6 = document.querySelector("#buttonClose6")

button6.onclick = function () {
    modal6.showModal()
}

buttonClose6.onclick = function () {
    modal6.close()
}
const questions = [
    {
        question: "Quem é a menina mais bonita do mundo?",
        answers: [
            {id: 1, text: "Sara Gabrielly", correct:true},
            {id: 2, text: "Sarah Gabrielly", correct:false},
            {id: 3, text: "Sara Gabriele", correct:false},
            {id: 4, text: "Sarah Gabriele", correct:false},
        ]
    },
    {
        question: "Você é:",
        answers: [
            {id: 1, text: "Feia", correct:false},
            {id: 2, text: "Normal", correct:false},
            {id: 3, text: "bonita", correct:false},
            {id: 4, text: "ABSURDAMENTE LINDA", correct:true},
        ]
    },
    {
        question: "Quando estou com você eu fico:",
        answers: [
            {id: 1, text: "Indiferente", correct:false},
            {id: 2, text: "Feio", correct:false},
            {id: 3, text: "Feliz", correct:true},
            {id: 4, text: "Triste", correct:false},
        ]
    },
    {
        question: "Qual o motivo de eu gostar de você?",
        answers: [
            {id: 1, text: "É impossível não gostar", correct:true},
            {id: 2, text: "Eu tenho mal gosto", correct:false},
            {id: 3, text: "Eu não gosto", correct:false},
            {id: 4, text: "Por piedade", correct:false},
        ]
    },
    {
        question: "O que eu mais amo em você?",
        answers: [
            {id: 1, text: "Seu sorriso", correct:false},
            {id: 2, text: "Sua personalidade", correct:false},
            {id: 3, text: "Seu corpo", correct:false},
            {id: 4, text: "Tudo", correct:true},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn")
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button)
    })
}

function selectAnswer(e) {
    const answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true
    });
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore()
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = "Você desbloqueou o texto secreto <br><br> <a href='sitesara2.html'>Abrir texto secreto</a>";
    nextButton.innerHTML = "Abrir";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton()
    } else {
        startQuiz();
    }
})

startQuiz();

const sections = document.querySelectorAll(".divisao");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});