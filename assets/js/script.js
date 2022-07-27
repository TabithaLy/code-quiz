// carousel quiz

// question array

// possible answer arrays

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

//  Selects carousel element
var carousel = document.querySelector(".carouselbox");

// // Selects buttons using their parent carousel element
// var next = carousel.querySelector(".next");
// var prev = carousel.querySelector(".prev");
// var index = 0;
// var currentImage;

var questionArray = [
  "Commonly used data types do not include?",
  "String values must be enclosed in:",
  "An if statement must always be followed by and else in JavaScript."
];
console.log(questionArray);
carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

// function navigate(direction) {
//   index = index + direction;
//   if (index < 0) { 
//     index = images.length - 1; 
//   } else if (index > images.length - 1) { 
//     index = 0;
//   }
//   currentImage = images[index];
//   carousel.style.backgroundImage = "url('" + currentImage + "')";
// }

// Clicking on image opens a new window containing the image
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// Clicking on next button displays next image in carousel
next.addEventListener("click", function(event) {
  // Stops event from bubbling up and new window opening
  event.stopPropagation();

  navigate(1);
});

// Clicking previous displays previous image in carousel
prev.addEventListener("click", function(event) {
  // Event bubbling would occur and a new window would open if we did not include the following line of code.
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
