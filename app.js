const btn = document.getElementById("submit");
const reset = document.getElementById("reset");
const pause = document.getElementById("pause");
const inputSec = document.getElementById("inputSec");
const inputMin = document.getElementById("inputMin");
const inputHr = document.getElementById("inputHr");

const date = new Date();
const dateHours = date.getHours();
const dateMinutes = date.getMinutes();
const dateSeconds = date.getSeconds();
const dateFullHour = `${dateHours}:${dateMinutes}:${dateSeconds}`
let dateHeader = document.getElementById("currentTime");
dateHeader.textContent = "Current Time: " + dateFullHour;

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const dateFullDate = `${day}/${month}/${year}`;
let dateFooter = document.getElementById("currentDate");
dateFooter.textContent = "Current Date: " + dateFullDate;


setInterval(() => {
    const date = new Date();
    const dateHours = date.getHours();
    const dateMinutes = date.getMinutes();
    const dateSeconds = date.getSeconds();
    const dateFullHour = `${dateHours}:${dateMinutes}:${dateSeconds}`
    let dateHeader = document.getElementById("currentTime");
    dateHeader.textContent = "Current Time: " + dateFullHour;

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateFullDate = `${day}/${month}/${year}`;
    let dateFooter = document.getElementById("currentDate");
    dateFooter.textContent = "Current Date: " + dateFullDate;
}, 1000);

btn.addEventListener("click", () => {
    let timeSec = parseInt(inputSec.value, 10) || 0;
    let timeMin = parseInt(inputMin.value, 10) || 0;
    let timeHr = parseInt(inputHr.value, 10) || 0;

    const intervalId = setInterval(() => {
        if (timeSec === 0) {
            if (timeMin === 0) {
                if (timeHr === 0) {
                    const audio = new Audio("./audio/audio.mp3");
                    audio.play();
                    clearInterval(intervalId);
                    inputSec.value = 0;
                    inputMin.value = 0;
                    inputHr.value = 0;
                    return;
                } else {
                    timeHr--;
                    timeMin = 59;
                    timeSec = 59;
                }
            } else {
                timeMin--;
                timeSec = 59;
            }
        } else {
            timeSec--;
        }

        inputSec.value = timeSec;
        inputMin.value = timeMin;
        inputHr.value = timeHr;
        pause.addEventListener("click",()=>{
            clearInterval(intervalId);
        });
        reset.addEventListener("click",()=>{
            clearInterval(intervalId);
            inputSec.value = 0;
            inputMin.value = 0;
            inputHr.value = 0;
        })
    }, 1000);
});