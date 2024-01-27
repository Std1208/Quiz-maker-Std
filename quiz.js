const questions = [
    {
        question: "Code Soft India gained recognition for developing which popular application?",
        options: ["Food Delivery app", "Navigation and tracking", "E-Commerce", "Fitness Tracking"],
        answer: "Navigation and tracking"
    },
    {
        question: "When was Code Soft India founded?",
        options: ["2010", "2012", "2014", "2016"],
        answer: "2012"
    },
    {
        question: "Which city is the headquarters of Code Soft India?",
        options: ["Mumbai", "Hyderabad", "New Delhi", "Benguluru"],
        answer: "Hyderabad"
    },
    {
        question: "What does Code Soft India primarily specialize in?",
        options: ["Mobile Develpoment", "Artificial Intelligence", "Cybersecurity", "Web Development"],
        answer: "Web Development"
    },
    {
        question: "Which programming language is often utilized by Code Soft India for its projects?",
        options: ["Python", "C++", "Java", "Java on Rails"],
        answer: "Python"
    },
    // Add more questions similarly...
    // Ensure there are 20 question objects with the question, options, and answer properties.
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submitBtn');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const currentQ = questions[currentQuestion];
    questionElement.innerText = currentQ.question;

    optionsElement.innerHTML = "";
    currentQ.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score++;
        resultElement.innerText = "Correct!";
        resultElement.classList.add('correct-answer');
    } else {
        resultElement.innerText = `Incorrect! The correct answer is: ${correctAnswer}`;
        resultElement.classList.add('incorrect-answer');
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionElement.innerText = `THANK YOU   
    Quiz Complete! Your Score: ${score} out of ${questions.length}`;
    

    optionsElement.innerHTML = "";
    resultElement.innerText = "";
    submitButton.style.display = 'none';
}

submitButton.addEventListener('click', displayQuestion);

displayQuestion();
