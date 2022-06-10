

hide(document.getElementById("info"))
hide(document.getElementById("piano"))


function onClick() {
    clicks += 1;
    document.getElementById("counter").innerHTML = `Antall noter ${clicks}`
    PlaySound("piano-c_C_major")
   
}

const countContainer = document.getElementById("countdown-number");



const startButton = document.getElementById("start");

var remainingTime = 30;


var timer;


var isStopped = true;

const startTimer = () => {
    show(document.getElementById("piano"))
    clicks = 0;
    if (isStopped) {
      isStopped = false;
      countContainer.innerHTML = remainingTime;
      timer = setInterval(renderTime, 1000);
    }
  };


startButton.onclick = startTimer;


const renderTime = () => {
    remainingTime -= 1;
    countContainer.innerHTML = remainingTime;
    if (remainingTime === 0) {
      isStopped = true;
      clearInterval(timer);
      remainingTime = 30;
      hide(document.getElementById("piano"));
      show(document.getElementById("info"));
    }
  };


function hide(elm) {
    elm.style.display = "none";
}

function show(elm) {
    elm.style.display = "block"
}

function PlaySound(melody) {
    var path = "assets/"
    var snd = new Audio(path + melody + ".wav");
    snd.play();
}



var formEl = document.getElementById("info");
var clicks = 0;

formEl.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(formEl, 16, clicks);
    sendData(formEl, 16, clicks);
});

function restart() {
  window.location.href=window.location.href
  clicks = 0;
};