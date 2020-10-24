// Defining starting buttons
var startBtn = document.getElementById("start-button");
var scoresBtn = document.getElementById("score-button");


// Defining quiz and banner elements
var startBanner = document.getElementById("start-banner");
var quizCard = document.getElementById("quiz-card");


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
        image: 
    }
]


// Define Start of Quiz
var currentQuestion = 0;
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
}


function startQuiz(){
    $(startBanner).fadeOut(500, function(){
        $(quizCard).fadeIn(500);
        timedCount();
        console.log("Check");
    });
}




// Event Listener for Start button
startBtn.addEventListener("click", startQuiz);