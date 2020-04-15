const deg = 6;
const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval( () => {
    let day = new Date();
    let clockH = day.getHours() * 30;
    let clockMin = day.getMinutes() * deg;
    let clockSec = day.getSeconds() *deg;

    hr.style.transform = `rotateZ( ${clockH + (clockMin/12)}deg)` ;
    min.style.transform = `rotateZ( ${clockMin}deg)` ;
    sec.style.transform = `rotateZ( ${clockSec}deg)` ;

});