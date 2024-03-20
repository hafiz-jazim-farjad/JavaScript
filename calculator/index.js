let display = document.getElementById("display");



function number(key) {
    display.innerHTML += key
}

function clearDisplay() {
    display.innerHTML = ''

}


function sum() {
    display.innerHTML = eval(display.innerHTML)
}