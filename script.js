let questions = [
    {
        question: "Which is the largest animal in the jungle?",
        options: [
            "Elephant",
            "Lion",
            "Giraffe",
            "Zebra",

        ],
        answer: 1
    },
    {
        question: "Which continent has most population?",
        options: [
            "Africa",
            "America",
            "Europe",
            "Asia",

        ],
        answer: 4
    },
    {
        question: "Which is the largest country of the world by population?",
        options: [
            "India",
            "China",
            "Pakistan",
            "Bengladesh",
        ],
        answer: 2
    },
    {
        question: "What plants make through sunlight?",
        options: [
            "Sugar",
            "Proteins",
            "Glucose",
            "Fats",
        ],
        answer: 3
    },
    {
        question: "Which is the largest country in the world?",
        options: [
            "China",
            "India",
            "Russia",
            "America",
        ],
        answer: 3
    },

];

let questionContainer = document.querySelector('.question');
let options = document.querySelectorAll(".option");
let nextBtn = document.querySelector(".next");
let playAgainBtn = document.querySelector(".play-again");
let result = document.querySelector(".result");
let questionSection = document.querySelector(".question-section");




function disableBtns() {
    let arrAllOptionsBtn = Array.from(options);
    for (const optionBtn of arrAllOptionsBtn) {

        optionBtn.disabled = true
    }
}
function enableBtns() {
    let arrAllOptionsBtn = Array.from(options);
    for (const optionBtn of arrAllOptionsBtn) {

        optionBtn.disabled = false;
    }
}
let questionIndex = 0;
let score = 0
let questionNum;

function displayQuestion() {
    questionNum = questionIndex + 1;
    questionContainer.innerHTML = questionNum + ". " + questions[questionIndex].question;
    for (let i = 0; i < questions[questionIndex].options.length; i++) {
        options[i].innerHTML = questions[questionIndex].options[i];
    }
    options.forEach((option, ind) => {
        option.addEventListener("click", (e) => {
            if (ind === questions[questionIndex].answer - 1) {
                e.target.style.backgroundColor = "green";
                nextBtn.style.display = "block";
                score += 1;
                console.log("I")
            }
            else {
                e.target.style.backgroundColor = "red";
                let ansElement = options[questions[questionIndex].answer - 1]
                ansElement.style.backgroundColor = "green";
                nextBtn.style.display = "block";

            }
            disableBtns()
        })
    })
}

displayQuestion()

function reset() {
    nextBtn.style.display = "none";
    enableBtns()
    options.forEach(option => {
        option.style.backgroundColor = "grey";
        option.style.display = "block";
    })
}

nextBtn.addEventListener("click", (e) => {
    console.log(score);

    if (questionIndex < questions.length - 1) {
        reset()
        nextBtn.style.display = "none";
        questionIndex++;
        questionNum = questionIndex + 1;
        displayQuestion()
    }

    else if (questionIndex == questions.length - 1) {
        nextBtn.style.display = "none";
        playAgainBtn.style.display = 'block';
        questionContainer.innerHTML = `You score is ${score}`;
        Array.from(options).forEach(el => {
            el.style.display = "none";
        })

    }


})
playAgainBtn.addEventListener("click", (e) => {
    playAgainBtn.style.display = "none";
    reset()
    score = 0;
    questionIndex = 0
    displayQuestion()
})


