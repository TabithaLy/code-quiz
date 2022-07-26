// question array

// possible answer arrays

// correct answer array to compare with user input

// copy/pasted timer from \UPENN-VIRT-FSF-FT-07-2022-U-LOLC\04-Web-APIs\01-Activities\09-Ins_Timers-Intervals\script.js
var timeEl = document.getElementById("time");
var mainEl = document.getElementById("main");

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

