// Defining starting buttons
var startBtn = document.getElementById("start-button");
var scoresBtn = document.getElementById("score-button");
var answerBtns = document.getElementsByClassName("btn-block");
var restartBtn = document.getElementById("restart-button");
var saveBtn = document.getElementById("save-button");
var playAgainBtn = document.getElementById("play-again-button");
var scoreReveal = document.getElementById("final-score-button");


// Defining quiz and banner elements
var startBanner = document.getElementById("start-banner");
var quizCard = document.getElementById("quiz-card");
var questionText = document.getElementById("question-text");
var questionNumber = document.getElementById("question-number");
var gameOverScreen = document.getElementById("game-over-card");
var countdown = document.getElementById("timer");
var scoreCount = document.getElementById("score");
var finalScore = document.getElementById("final-score");
var timeLeft = document.getElementById("final-timer");
var scoreScreen = document.getElementById("score-card");


// Define questions and their respective answers
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
    },
    {
        question: '2. What was the first anime aired?',
        choices: [
            'Detective Conan',
            'Gundam',
            'Astro Boy',
            'Otogo Manga Calendar',
        ],
        correctAnswer: 3,
        image: "./assets/question-2.png",
    },
    {
        question: '3. According to the website "MyAnimeList," what is the most viewed series of all time?',
        choices: [
            'Attack on Titan',
            'Sword Art Online',
            'Death Note',
            'Fullmetal Alchemist: Brotherhood',
        ],
        correctAnswer: 2,
        image: "./assets/question-3.png",
    },
    {
        question: '4. Which of the following is the longest running series of the bunch by episode count?',
        choices: [
            'Gintama',
            'One Piece',
            'Bleach',
            'Fairy Tail',
        ],
        correctAnswer: 1,
        image: "./assets/question-4.jpg",
    },
    {
        question: '5. According to "MyAnimeList," which of the following series is the highest rated by users?',
        choices: [
            'Hunter x Hunter',
            'Fullmetal Alchemist:Brotherhood',
            'Gintama',
            'Steins;Gate',
        ],
        correctAnswer: 1,
        image: "./assets/question-5.png",
    },
    {
        question: '6. Which of the following movies is the highest grossing anime film of all time?',
        choices: [
            'Spirited Away',
            "Howl's Moving Castle",
            'Weather with You (Tenki no Ko)',
            'Your Name (Kimi no Na wa)',
        ],
        correctAnswer: 3,
        image: "./assets/question-6.jpg",
    },
    {
        question: '7. Of the following animation studios, which one has the most number of employees?',
        choices: [
            'A-1 Studios',
            'Toei Animation',
            'Studio Ghibli',
            'Ufotable',
        ],
        correctAnswer: 1,
        image: "./assets/question-7.jpg",
    },
    {
        question: '8. What is the approximate net worth (USD) of the anime industry as a whole in 2018?',
        choices: [
            '$20 billion',
            '$10 billion',
            '$30 billion',
            '$5 billion',
        ],
        correctAnswer: 0,
        image: "./assets/question-8.png",
    },
    {
        question: '9. Of the following, which are not a "Servant" class in the Fate series?',
        choices: [
            'Saber',
            'Alter Ego',
            'Fencer',
            'Caster',
        ],
        correctAnswer: 2,
        image: "./assets/question-9.png",
    },
    {
        question: '10. Which series from the following is not a "Weekly Shounen Jump" title?',
        choices: [
            'Black Clover',
            'My Hero Academia',
            'Boruto',
            'Dr. Stone',
        ],
        correctAnswer: 2,
        image: "./assets/question-10.png",
    },
    {
        question: '11. Which of the following is not a game that appears in the story of "Sword Art Online" series?',
        choices: [
            'Knife Dance Online',
            'Gun Gale Online',
            'Alfheim Online',
            'Sword Art Online',
        ],
        correctAnswer: 0,
        image: "./assets/question-11.jpg",
    },
    {
        question: '12. Which of the following is not a part of the  "Nine Titans" from "Attack on Titan"?',
        choices: [
            'Armored Titan',
            'Female Titan',
            'Dancing Titan',
            'Towering Titan',            
        ],
        correctAnswer: 3,
        image: "./assets/question-12.png",
    },
    {
        question: '13. Which of the following musicians have NOT worked with the animation studio Ufotable?',
        choices: [
            'LiSA',
            'Hiroyuki Sawano',
            'Yuki Kajiura',
            'Aimer',
        ],
        correctAnswer: 1,
        image: "./assets/question-13.png",
    },
    {
        question: '14. Which of the following studios has NOT worked on a Fate series related project?',
        choices: [
            'A-1 Studios',
            'Shaft',
            'Studio Trigger',
            'TROYCA',
        ],
        correctAnswer: 2,
        image: "./assets/question-14.png",
    },
    {
        question: '15. What is a common phrase that is spoken in anime when the characters are about to eat?',
        choices: [
            'Rub a dub dub, thanks for the grub!',
            'Tadaima!',
            'Itadakimasu!',
            'Okaeri!',
        ],
        correctAnswer: 2,
        image: "./assets/question-15.png",
    },
];


// Start of Quiz set variables
var currentQuestionCount = 0;
var score = 0;
var totalScore = 0;


// Countdown Timer
var c = 180;
var t;

function timedCount() {
    var minutes = parseInt(c / 60) % 60;
    var seconds = c % 60;
    var result =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
    countdown.innerHTML = "Time left: " + result;
    
    c = c-1;
    t = setTimeout(function(){
        timedCount();
    },1000);

    if (c < 0) {
        gameOver();
        clearTimeout(t);
    }
};


// Shows quiz after Start button is pushed
function startQuiz(){
    var score = 0;
    startBanner.style.display = "none";
    quizCard.style.display = "block";
    scoreCount.innerHTML = "Questions correct: " + score;
    timedCount();
    showCurrentQuestion();
};


// Restarts the quiz
function restartQuiz(){
    score = 0;
    c = 180;
    currentQuestionCount = 0;
    scoreScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    quizCard.style.display = "block";
    scoreCount.innerHTML = "Questions correct: " + score;
    if(document.getElementById("final-score") === null){

    } else{
        document.getElementById("final-score").remove();
    }
    scoreReveal.style.display = "block";
    showCurrentQuestion();
    timedCount();
}


// Shows current question and tracks current question number
function showCurrentQuestion() {
    if (currentQuestionCount < 15) {
        var question = questions[currentQuestionCount].question;
        var numberChoices = questions[currentQuestionCount].choices.length;
        var choice;
        questionText.innerText = question;
        document.getElementById("question-img").src = questions[currentQuestionCount].image;
        for (var i=0; i < numberChoices; i++) {
            choice = questions[currentQuestionCount].choices[i];
            document.getElementById("button"+i).innerText = choice;
        }
        checkQuestion();
    }
    else{
        gameOver();
    }
}


// Checks to see if the answer was correct and increases score if correct, deducts time if incorrect
var score = 0
function checkQuestion(){
    for (var i=0 ; i < answerBtns.length ; i++){
        (function (index){
            answerBtns[index].onclick = function(){
                if (index === questions[currentQuestionCount-2].correctAnswer){
                    score++;
                    scoreCount.innerHTML = "Questions correct: " + score;
                }
                else {
                    c=c-10;
                };
            };
        })(i);
    };
    currentQuestionCount++;
};


// Game Over screen
function gameOver(){
    quizCard.style.display = "none";
    gameOverScreen.style.display = "block";
    // Convert seconds left to min:sec
        var minutes = parseInt(c / 60) % 60;
        var seconds = c % 60;
        var result =
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds);
    timeLeft.innerHTML = "Time left: " + result;
    clearTimeout(t);
}


// Updates score after checking last question, then shows score
function refreshScore(){
    scoreReveal.style.display = "none";
    totalScore = score;
    var newNode = document.createElement('h3');
    newNode.className = "display-4 d-flex justify-content-center";
    newNode.setAttribute("id", "final-score");
    newNode.innerHTML = "Final Score: " + totalScore + " of 15!";
    document.getElementById("final-score-here").appendChild(newNode);
}


// Shows score screen
function showScore(){
    gameOverScreen.style.display = "none";
    startBanner.style.display = "none";
    scoreScreen.style.display = "block";
    var lastScore = JSON.parse(localStorage.getItem("Last Score"));
    document.getElementById("username-display").textContent = lastScore.name;
    document.getElementById("score-display").textContent = lastScore.score;
    document.getElementById("time-display").textContent = lastScore.timeLeft;
}


// Save Score
function saveScore(){
    var nameInput = document.querySelector("#initials-input");
    // Convert seconds left to min:sec
    var minutes = parseInt(c / 60) % 60;
    var seconds = c % 60;
    var result =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds); 
    var completeScore = {
        name: nameInput.value,
        score: score,
        timeLeft: result
    };
    localStorage.setItem("Last Score", JSON.stringify(completeScore));
    showScore();
}


// Event Listener for all buttons
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);
for (var i = 0; i < answerBtns.length; i++) {
    answerBtns[i].addEventListener('click', showCurrentQuestion);
}
scoresBtn.addEventListener("click", showScore);
saveBtn.addEventListener("click", saveScore);
playAgainBtn.addEventListener("click",restartQuiz);
scoreReveal.addEventListener("click",refreshScore);