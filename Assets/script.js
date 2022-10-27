//set elements from index.html

var startButtonEl = document.querySelector
    ("#start-quiz-button");
var topBarInfoEl = document.querySelector
    ("#top-bar-info");
var timerEl = document.querySelector
    ("#timer");
var quizIntroScreenEl = document.querySelector
    ("#quiz-intro-screen");
var questionScreenEl = document.querySelector
    ("#question-screen");
var questionTitleEl = document.querySelector
    ("#question-title");
var questionResponseEl = document.querySelector
    ("#question-response");
var quizFinishedScreenEl = document.querySelector
    ("#quiz-finished-screen");
var quizFinishedTitleEl = document.querySelector
    ("#quiz-finished-title");
var quizScoreEl = document.querySelector
    ("#quiz-score");
var highscoreScreenEl = document.querySelector
    ("#highscore-screen");
var highscoreTitleEl = document.querySelector
    ("#highscore-title");
var goBackButtonEl = document.querySelector
    ("#go-back-button");
var clearScoreButtonEl = document.querySelector
    ("#clear-score-button");
var answer1El = document.querySelector
    ("#answer-1");
var answer2El = document.querySelector
    ("#answer-2");
var answer3El = document.querySelector
    ("#answer-3");
var answer4El = document.querySelector
    ("#answer-4");
var answerButtonEl = document.querySelectorAll
    (".answer-button");
var li = document.getElementsByTagName
    ("li");
var timer = 75;
var qindex = 0;

//switch from intro screen to quiz screen and display first question//
startButtonEl.addEventListener("click",
    function () {
        quizIntroScreenEl.setAttribute("style", "display: none");
        questionScreenEl.setAttribute("style", "display: block");
        questionResponseEl.setAttribute("style", "display: none");


        var countdown = setInterval(
            function () {
                if (timer >= 0) {
                    timerEl.textContent = "Timer: " + timer;
                    timer--;
                }
                else {
                    clearInterval(countdown)
                    timerEl.textContent = "You are out of Time"
                }
            }, 1000
        );
        nextQuestion();

    });


//populate questionTitleEl with questions and ul with buttons displaying correctAnswer and incorrectAnswer
//next question function

function nextQuestion() {
    if (quizquestions[qindex]){

    var currentquestion = quizquestions[qindex];


    questionTitleEl.innerHTML = currentquestion.question;
    answer1El.innerHTML = currentquestion.answers[0];
    answer2El.innerHTML = currentquestion.answers[1];
    answer3El.innerHTML = currentquestion.answers[2];
    answer4El.innerHTML = currentquestion.answers[3];



   
    }
    //switch to quiz over/score screen
    else {
        console.log("quizover")
    }

}

//function for displaying if answer clicked is correct/incorrect and changing display question response
for (i = 0; i < answerButtonEl.length; i++) {
    answerButtonEl[i].addEventListener("click",
        function (e) {
            handleResponse(e);
        })

}

function handleResponse (e){
    var selectedAnswer = e.target.textContent;
    var rightAnswer = quizquestions[qindex].correctanswer;
    console.log(selectedAnswer,rightAnswer);
     if ( selectedAnswer == rightAnswer){
        questionResponseEl.setAttribute("style", "display: block");
        questionResponseEl.textContent= "CORRECT";

        console.log("correct");
     }
     else{
        questionResponseEl.setAttribute("style", "display: block");
        questionResponseEl.textContent= "YOU ARE WRONG!";
        console.log("you are wrong");
        timer = timer - 10; 
     }
     qindex++;
     nextQuestion();
}


//question response function
// function questionResponse (){
// li.addEventListener("click", 
//     function () {
//         console.log("click");
//     }
// )
// }



//quiz questions

var quizquestions = [
    {
        question: "Commonly used data types DO Not Include:",
        correctanswer: "alerts",
        answers: ["strings", "booleans", "numbers", "alerts"],
    },
    {
        question: "The condition in an if/ else statement is enclosed with _____.",
        correctanswer: "parenthesis",
        answers: ["quotes", "curly brackets", "square brackets", "parenthesis"],
    },
    {
        question: "Arrays in JavaScript can be used to store______.",
        correctAnswer: "all of the above",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        correctAnswer: "quotes",
        answers: ["commas", "curly brackets", "parenthesis", "quotes"],
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        correctAnswer: "console.log",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    },

]





