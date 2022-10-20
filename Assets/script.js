//set elements from index.html

var startButtonEl = document.querySelector
    ("#start-quiz-button");
var topBarInfoEl = document.querySelector
    ("#top-bar-info");
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
var timer = 75;
var qindex = 0;

//switch from into screen to quiz screen and display first question//
startButtonEl.addEventListener("click",
    function () {
        quizIntroScreenEl.setAttribute("style", "display: none");
        questionScreenEl.setAttribute("style", "display: block");

        var countdown = setInterval(
            function () {
                if (timer >= 0) {
                    topBarInfoEl.textContent = "Timer: " + timer;
                    timer--;
                }
                else {
                    clearInterval(countdown)
                    topBarInfoEl.textContent = "You are out of Time"
                }
            }, 1000
        );
        nextQuestion();

    });

// start timer when start-button clicked
// startButtonEl.addEventListener("click",
//     function () {
//         var time = 60;
//         setInterval(function () {
//             time--;
//             if (time >= 0){
//                 topBarInfoEl.textContent = "Timer: " + time;
//             }

//         }, 1000);

//     };

//);



//populate questionTitleEl with questions and ul with buttons displaying correctAnswer and incorrectAnswer
//next question function

function nextQuestion() {
    var currentquestion = quizquestions[qindex];
    
    questionTitleEl.
    console.log(currentquestion.question);
    qindex++;
}



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
        incorrectanswers: ["quotes", "curly brackets", "square brackets"],
    }

]



// quiz.newquestion( 
//     question("Commonly used data types DO Not Include:")
//         .correctAnswer("alerts")
//         .incorrectAnswers("strings", "booleans", "numbers")
// );

// quiz.newquestion(
//     question("The condition in an if/ else statement is enclosed with _____.")
//         .correctAnswer("parenthesis")
//         .incorrectAnswers("quotes", "curly brackets", "square brackets")
// );

// quiz.newquestion(
//     question("Arrays in JavaScript can be used to store______.")
//         .correctAnswer("all of the above")
//         .incorrectAnswers("numbers and strings", "other arrays", "booleans")
// );

// quiz.newquestion(
//     question("String values must be enclosed within ____ when being assigned to variables.")
//         .correctAnswer("quotes")
//         .incorrectAnswers("commas", "curly brackets", "parenthesis")
// );

// quiz.newquestion(
//     question("A very useful tool used during development and debugging for printing content to the debugger is:")
//         .correctAnswer("console.log")
//         .incorrectAnswers("JavaScript", "terminal/bash", "for loops")
// );