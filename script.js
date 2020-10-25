// Defining starting buttons
var startBtn = document.getElementById("start-button");
var scoresBtn = document.getElementById("score-button");


// Defining quiz and banner elements
var startBanner = document.getElementById("start-banner");
var quizCard = document.getElementById("quiz-card");
var questionText = document.getElementById("question-text");
var questionNumber = document.getElementById("question-number");

// Define questions
var questions = [
    {
        question: '1. What does Japanese word "anime" derive from?',
        choices: [
            'Animation',
            'Amine',
            'Animatronics',
            'Nothing, it is an original Japanese word',
        ],
        correctAnswer: 0,
        image: "./assets/question-1.png",
    }
];


// Define Start of Quiz
var currentQuestionCount = 0;
var correctAnswers = 0;
var quizOver = false;



// Time countdown
var c = 300;
var t;

function timedCount() {
    var minutes = parseInt(c / 60) % 60;
    var seconds = c % 60;
    var result =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
    $("#timer").html(result);
    
    c = c-1;
    t = setTimeout(function(){
        timedCount();
    },1000);
};

// Shows quiz after Start button is pushed
function startQuiz(){
    startBanner.style.display = "none";
    quizCard.style.display = "block";
    timedCount();
    showCurrentQuestion();
    console.log("Check");
};

// 
function showCurrentQuestion() {
    var question = questions[currentQuestionCount].question;
    var numberChoices = questions[currentQuestionCount].choices.length;
    var choice;

    questionText.innerText = question;
    document.getElementById("question-img").src = questions[currentQuestionCount].image;
    for (var i=0; i < numberChoices; i++) {
        choice = questions[currentQuestionCount].choices[i];
        document.getElementById("button"+i).innerText = choice;
    }

}



// Event Listener for Start button
startBtn.addEventListener("click", startQuiz);