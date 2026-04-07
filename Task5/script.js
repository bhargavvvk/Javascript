questionArray = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: 1
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: 0 
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: 0
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: 1
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: 2 
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "Which language is primarily spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        answer: 1
    }
];

let currentQuestionIndex =0;
let score = 0;
let totalQuestions = questionArray.length;

const questionElement=document.getElementById("question-text");
const optionsElement1=document.getElementById("label1");
const optionsElement2=document.getElementById("label2");
const optionsElement3=document.getElementById("label3");
const optionsElement4=document.getElementById("label4");
const NextButton=document.getElementById("next");
const feedbackElement = document.getElementById("feedback-text");


function loadQuestion() {
    const currentQuestion = questionArray[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement1.textContent = currentQuestion.options[0];
    optionsElement2.textContent = currentQuestion.options[1];
    optionsElement3.textContent = currentQuestion.options[2];
    optionsElement4.textContent = currentQuestion.options[3];
}

NextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answerIndex = parseInt(selectedOption.value);
        console.log(answerIndex);
        console.log(questionArray[currentQuestionIndex].answer);
        if (answerIndex === questionArray[currentQuestionIndex].answer) {
            score++;
        }
        selectedOption.checked = false; 
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
    } else {
        NextButton.disabled = true;
        questionElement.textContent = `Quiz completed! Your score: ${score}/${totalQuestions}`;
        const options = document.getElementById("options");
        options.style.display = "none";
        NextButton.style.display = "none";
        feedbackElement.textContent = "Thank you for participating!";
    }
});


loadQuestion();


