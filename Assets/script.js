//set elements from index.html

let startButtonEl = document.querySelector
    ("#start-quiz-button");
let topBarInfoEl = document.querySelector
    ("#top-bar-info");
let timerEl = document.querySelector
    ("#timer");
let quizIntroScreenEl = document.querySelector
    ("#quiz-intro-screen");
let questionScreenEl = document.querySelector
    ("#question-screen");
let questionTitleEl = document.querySelector
    ("#question-title");
let questionResponseEl = document.querySelector
    ("#question-response");
let quizFinishedScreenEl = document.querySelector
    ("#quiz-finished-screen");
let quizFinishedTitleEl = document.querySelector
    ("#quiz-finished-title");
let quizScoreEl = document.querySelector
    ("#quiz-score");
let highscoreScreenEl = document.querySelector
    ("#highscore-screen");
let highscoreTitleEl = document.querySelector
    ("#highscore-title");
let goBackButtonEl = document.querySelector
    ("#go-back-button");
let clearScoreButtonEl = document.querySelector
    ("#clear-score-button");
let answer1El = document.querySelector
    ("#answer-1");
let answer2El = document.querySelector
    ("#answer-2");
let answer3El = document.querySelector
    ("#answer-3");
let answer4El = document.querySelector
    ("#answer-4");
let answerButtonEl = document.querySelectorAll
    (".answer-button");
let li = document.getElementsByTagName
    ("li");
let highscoreButtonEl = document.querySelector
    ("#highscore-button");
let submitButtonEl = document.querySelector
    ("#submit-button");
let inputFormEl = document.getElementById
    ("input-form");
let timer = 75;
let qindex = 0;
let countdown;

//switch from intro screen to quiz screen and display first question//

startButtonEl.addEventListener("click",
    function () {
        qindex = 0 ;
        timer = 75;
    
        quizIntroScreenEl.setAttribute("style", "display: none");
        questionScreenEl.setAttribute("style", "display: block");
        questionResponseEl.setAttribute("style", "display: none");


        countdown = setInterval(
            function () {
                if (timer > 0) {
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

    let currentquestion = quizquestions[qindex];


    questionTitleEl.innerHTML = currentquestion.question;
    answer1El.innerHTML = currentquestion.answers[0];
    answer2El.innerHTML = currentquestion.answers[1];
    answer3El.innerHTML = currentquestion.answers[2];
    answer4El.innerHTML = currentquestion.answers[3];



   
    }
    //switch to quiz over/score screen
    else {
        quizOverScreen();
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
    let selectedAnswer = e.target.textContent;
    console.log(qindex);
    let rightAnswer = quizquestions[qindex].correctAnswer;
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

function quizOverScreen (){
    questionScreenEl.setAttribute("style", "display: none");
   
    quizFinishedScreenEl.setAttribute("style", "display: block");
    quizFinishedTitleEl.textContent= "The quiz is Over! You got a score of: " + timer;
    let score = timer;
    console.log(score);
    clearInterval(countdown);
    timerEl.textContent = "You are out of Time";
  

}

//display Highscores when button Pressed
highscoreButtonEl.addEventListener("click",function(){

    questionScreenEl.setAttribute("style", "display: none");
    quizIntroScreenEl.setAttribute("style", "display: none");
    highscoreScreenEl.setAttribute("style", "display: block");
    quizFinishedScreenEl.setAttribute("style", "display: none");
    renderScores();
    
})

goBackButtonEl.addEventListener("click",function(){

   
    quizIntroScreenEl.setAttribute("style", "display: block");
    highscoreScreenEl.setAttribute("style", "display: none");
    quizFinishedScreenEl.setAttribute("style", "display: none");
})

let highScores = JSON.parse(localStorage.getItem("highScores"))||[];

submitButtonEl.addEventListener("click",function(event){
    // event.preventDefault();
    console.log(inputFormEl.value);
    highscoreScreenEl.setAttribute("style", "display: block");
    if (inputFormEl.value.trim() !== ""){

    let userData = {
        initials : inputFormEl.value,
        score : timer
    }

    highScores.push(userData);

    localStorage.setItem("highScores",JSON.stringify(highScores));
    renderScores();

    inputFormEl.value = "";
    
    }
    else return;

})

function renderScores(){
    let scores = document.getElementById("scores")
    scores.innerHTML= "";
    for ( let i =0; i< highScores.length; i++){
        let li = document.createElement("li")
        li.textContent = highScores[i].initials+": "+highScores[i].score;
        scores.appendChild(li);

    }

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

let quizquestions = [
    {
        question: "Commonly used data types DO Not Include:",
        correctAnswer: "alerts",
        answers: ["strings", "booleans", "numbers", "alerts"],
    },
    {
        question: "The condition in an if/ else statement is enclosed with _____.",
        correctAnswer: "parenthesis",
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





