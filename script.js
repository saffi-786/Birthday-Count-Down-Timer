
function doTask() {
    const bar = document.getElementById('birthday').value;
    
    localStorage.setItem("name-item", bar);
    location.href = "index.html";
}

const saffi = localStorage.getItem("name-item");

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const m = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

const date = saffi.substring(8) + " " + m[saffi.substring(5,7) - 1] + " " + saffi.substring(0,4);

function countDown() {
    const newYearDate = new Date(date);
    const currDate = new Date();

    const totalSeconds = (newYearDate - currDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) %24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);
