var msec = 0;
var sec = 0;
var min = 0;
// function checkTime(i) {
//   if (i < 10) {
//     i = "0" + i;
//   }
//   return i;
// }

function start() {
  go = setTimeout("start()", 10);
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
  }
  
  if (sec == 60) {
    sec = 0;
    min++;
  }
  // debugger
  document.forms[0].display.value = min + ":" + sec + ":" + msec;
}

function stop() {
  clearTimeout(go);
}
function reset() {
  window.location.reload();
}

function loop() {
  let lapElement = document.querySelector(".lapped-time");
  let timmerElement = document.querySelector(".js-time-runner");
  lapElement.appendChild(document.createElement("li"));
  lapElement.innerHTML = timmerElement.value;
}

function over1(test) {
  document.getElementById("over1").style.background = test;
}
function out1(test) {
  document.getElementById("over1").style.background = test;
}
function over2(test) {
  document.getElementById("over2").style.background = test;
}
function out2(test) {
  document.getElementById("over2").style.background = test;
}
function over3(test) {
  document.getElementById("over3").style.background = test;
}
function out3(test) {
  document.getElementById("over3").style.background = test;
}
function over4(test) {
  document.getElementById("over4").style.background = test;
}
function out4(test) {
  document.getElementById("over4").style.background = test;
}
