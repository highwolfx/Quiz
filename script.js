// Defining starting buttons
var startBtn = document.getElementById("start-button");
var scoresBtn = document.getElementById("score-button");
var answerBtns = document.getElementsByClassName("btn-block");


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
        image: "./assets/question-1.png",
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
        image: "./assets/question-1.png",
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
        image: "./assets/question-1.png",
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
        image: "./assets/question-1.png",
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
        image: "./assets/question-1.png",
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
        image: "./assets/question-1.png",
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
        image: "./assets/question-1.png",
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
        image: "./assets/question-1.png",
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
        image: "./assets/question-1.png",
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
        image: "./assets/question-1.png",
    },
    {
        question: '12. Which of the following is not a part of the  " Nine Titans" from "Attack on Titan"?',
        choices: [
            'Armored Titan',
            'Female Titan',
            'Towering Titan',
            'Dancing Titan',
        ],
        correctAnswer: 2,
        image: "./assets/question-1.png",
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
        image: "./assets/question-1.png",
    },
    {
        question: '14. Which of the following studios has NOT worked on a Fate series project?',
        choices: [
            'A-1 Studios',
            'Shaft',
            'Studio Trigger',
            'TROYCA',
        ],
        correctAnswer: 2,
        image: "./assets/question-1.png",
    },
    {
        question: '15. What is a common phrase that is spoken in anime when the characters are about to eat?',
        choices: [
            'Rub a dub dub, thanks for the grub!',
            'Tadaima!',
            'Okaeri!',
            'Itadakimasu!',
        ],
        correctAnswer: 3,
        image: "./assets/question-1.png",
    },
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
    document.getElementById("timer").innerHTML = "Time left: " + result;
    
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
};


// Shows current question
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
    currentQuestionCount++;
}





// Event Listener for Start button
startBtn.addEventListener("click", startQuiz);
for (var i = 0; i < answerBtns.length; i++) {
    answerBtns[i].addEventListener('click', showCurrentQuestion);
}