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



let questionIndex;
let score;
let questionNum;

function displayQuestion() {
    questionIndex = 0;
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
            }
            else {
                e.target.style.backgroundColor = "red";
                let ansElement = options[questions[questionIndex].answer - 1]
                ansElement.style.backgroundColor = "green";
                nextBtn.style.display = "block";
            }

        })
    })
}

displayQuestion()
nextBtn.addEventListener("click", (e) => {

    if (questionIndex < questions.length - 1) {
        nextBtn.style.display = "none";
        questionIndex++;
        questionNum = questionIndex + 1;
        questionContainer.innerHTML = questionNum + ". " + questions[questionIndex].question;

        options.forEach(option => {
            option.style.backgroundColor = "grey";
        })
        for (let i = 0; i < questions[questionIndex].options.length; i++) {
            options[i].innerHTML = questions[questionIndex].options[i];
        }
        options.forEach((option, ind) => {
            option.addEventListener("click", (e) => {
                if (ind === questions[questionIndex].answer - 1) {
                    e.target.style.backgroundColor = "green";
                    nextBtn.style.display = "block";

                }
                else {
                    e.target.style.backgroundColor = "red";
                    let ansElement = options[questions[questionIndex].answer - 1]
                    ansElement.style.backgroundColor = "green";
                    nextBtn.style.display = "block";
                }
            })
        })
    }

    else if (questionIndex == questions.length - 1) {
        nextBtn.style.display = "none";
        playAgainBtn.style.display = 'block';

    }


})
playAgainBtn.addEventListener("click", (e) => {

    playAgainBtn.style.display = "none";
    options.forEach(option => {
        option.style.backgroundColor = "grey";
    })
    displayQuestion()
})


