// carousel quiz
// var answer = querySelectorAll(".answer");
// question array
var questionArray = [
    "Commonly used data types do not include?",
    "String values must be enclosed in:",
    "An if statement must always be followed by and else in JavaScript.",
];
// possible answers array variables

var answerOneArray = [
    "strings",
    "booleans",
    "alerts",
    "numbers",
];

var answerTwoArray = [
    "double or single quotation marks",
    "angle brackets",
    "curly braces",
    "strings can just be written as they are without being enclosed in anything",
];

var answerThreeArray = [
    "true",
    "false",
];

var correctAnswers = [
    "alerts",
    "double or single quotation marks",
    "false",
]
var answerOneA = document.getElementById("answer-one-a");
var answerOneB = document.getElementById("answer-one-b");
var answerOneC = document.getElementById("answer-one-c");
var answerOneD = document.getElementById("answer-one-d");
var answerTwoA = document.getElementById("answer-two-a");
var answerTwoB = document.getElementById("answer-two-b");
var answerTwoC = document.getElementById("answer-two-c");
var answerTwoD = document.getElementById("answer-two-d");
var answerThreeT = document.getElementById("answer-three-t");
var answerThreeF = document.getElementById("answer-three-f");

var carousel = document.querySelector(".carousel-box");
var answer = carousel.querySelector(".answer");
var index = 0;
var currentQuestion;

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = answer.length - 1; 
  } else if (index > answer.length - 1) { 
    index = 0;
  }
  currentQuestion = answer[index];
  
}

answer.addEventListener("click", function(event) {
  // Stops event from bubbling up and new window opening
  event.stopPropagation();

  navigate(1);
});

document.getElementById("q-one").textContent = questionArray[0];
document.getElementById("answer-one-a").textContent = answerOneArray[0];
document.getElementById("answer-one-b").textContent = answerOneArray[1];
document.getElementById("answer-one-c").textContent = answerOneArray[2];
document.getElementById("answer-one-d").textContent = answerOneArray[3];
// for (let i = 0; i <= answerOneArray.length; i++) {
//     //answerOneArray.textContent = answerOneArray[i];
//     console.log(answerOneArray[i]);
// }
document.getElementById("q-two").textContent = questionArray[1];
document.getElementById("answer-two-a").textContent = answerTwoArray[0];
document.getElementById("answer-two-b").textContent = answerTwoArray[1];
document.getElementById("answer-two-c").textContent = answerTwoArray[2];
document.getElementById("answer-two-d").textContent = answerTwoArray[3];
// for (let j = 0; j <= answerTwoArray.length; j++) {
//     console.log(answerTwoArray[j]);
// }
document.getElementById("q-three").textContent = questionArray[2];
document.getElementById("answer-three-t").textContent = answerThreeArray[0];
document.getElementById("answer-three-f").textContent = answerThreeArray[1];
// for (let k = 0; k <= answerThreeArray.length; k++) {
//     console.log(answerThreeArray[k]);
// }

// correct answer array to compare with user input

// copy/pasted and edited timer from \UPENN-VIRT-FSF-FT-07-2022-U-LOLC\04-Web-APIs\01-Activities\09-Ins_Timers-Intervals\script.js
var timeEl = document.getElementById("time");

var secondsLeft = 30;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = 'Time: ' + secondsLeft;
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
        
    }, 1000);
}
setTime();

