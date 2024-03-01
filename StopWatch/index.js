// text blink 1 method
// const blink = document.getElementById("blink")
// setInterval(function () {
//     if (blink.style.display === "") {
//         blink.style.display = "none";
//     }
//     else if (blink.style.display === "none") {
//         blink.style.display = "";

//     }
// }, 1000);

// text blink 2 method (this is my favourite)
let blink = document.getElementById('blink');
setInterval(() => {
    if (blink.style.opacity == "1") {
        blink.style.opacity = "0"
    } else {
        blink.style.opacity = "1"
    }
}, 1000);


// stopwatch start from here
// for disabled button after one click 
let test = document.getElementById("startBtn")

const counter = document.getElementById('counter');
let hour = 0;
let miniute = 0;
let second = 0;
let milisecond = 0;

function startbtn() {
    test.disabled = true;
    setInterval(() => {
        milisecond++;
        if (milisecond === 99) {
            milisecond = 0;
            second++;
        } else if (second === 60) {
            second = 0;
            miniute++;
        }
        else if (miniute == 60) {
            miniute = 0;
            hour++;
        }
        else {
        }
        if (milisecond < 10 && second < 10 && miniute < 10) {
            counter.innerHTML = `${hour}:0${miniute}:0${second}:0${milisecond}`;
        }
        else if (milisecond > 9 && second > 9 && miniute > 9) {
            counter.innerHTML = `${hour}:${miniute}:${second}:${milisecond}`;
        }
        else if (milisecond > 9 && second < 10 && miniute < 10) {
            counter.innerHTML = `${hour}:0${miniute}:0${second}:${milisecond}`;
        }
        else if (milisecond > 9 && second > 9 && miniute < 10) {
            counter.innerHTML = `${hour}:0${miniute}:${second}:${milisecond}`;
        }
        else {
            counter.innerHTML = `${hour}:0${miniute}:0${second}:0${milisecond}`;
        }
    }, 10);
}



// for reset button (but it's not working)

// const reset = document.getElementById("resetBtn");
// function resetbtn() {
//     counter.innerHTML = "0:00:00:00";
// }
