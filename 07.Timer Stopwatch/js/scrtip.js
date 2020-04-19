window.onload = () => {
  //Define Our UI Variables
  let sec = 00,
    miliSec = 00,
    min = 00,
    getSecond = document.querySelector("#seconds"),
    getMin = document.querySelector("#min"),
    getMiliSec = document.querySelector("#miliSec"),
    statBtn = document.querySelector("#btn-start"),
    stopBtn = document.querySelector("#btn-stop"),
    resetBtn = document.querySelector("#btn-reset"),
    clockNeedle = document.querySelector(".clockNeedle"),
    interval;
  function startTimer() {
    miliSec++;
    if (miliSec < 9) {
      getMiliSec.innerHTML = "0" + miliSec;
    }
    if (miliSec > 9) {
      getMiliSec.innerHTML = miliSec;
    }
    if (miliSec > 99) {
      sec++;
      getSecond.innerHTML = "0" + sec;
      miliSec = 0;
      getMiliSec.innerHTML = "0" + 0;
    }
    if (sec > 9) {
      getSecond.innerHTML = sec;
    }
    if (sec > 59) {
      min++;
      getMin.innerHTML = "0" + sec;
      sec = 0;
      getSecond.innerHTML = "0" + 0;
    }
    if (min > 9) {
      getMin.innerHTML = min;
    }
  } //startTimer End
  statBtn.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    clockNeedle.classList.add("active");
  };
  stopBtn.onclick = function () {
    clearInterval(interval);
    clockNeedle.classList.remove("active");
  };
  resetBtn.onclick = function () {
    clearInterval(interval);
    miliSec = "00";
    sec = "00";
    min = "00";
    getMiliSec.innerHTML = miliSec;
    getSecond.innerHTML = sec;
    getMin.innerHTML = min;
  };
};
