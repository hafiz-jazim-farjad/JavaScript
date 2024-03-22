let main_div = document.getElementById("main-div")

console.log(main_div)

for (let i = 1; i <= 9; i++) {
    main_div.innerHTML += `<div class="inner-div" id="inner-div" onclick="clickBox(this)" ></div>`
}

let user = true

function clickBox(element) {
    if (element.innerHTML == "") {

        if (user === true) {
            element.innerHTML = `<img src=" https://t3.ftcdn.net/jpg/02/92/85/46/360_F_292854695_LPwCvK8gRt4saZvG06gwwYtOvzwohe5s.jpg" />`
            user = false
        }
        else if (user === false) {
            element.innerHTML = `<img src="https://static-00.iconduck.com/assets.00/cross-mark-icon-256x256-dognt785.png" />`
            user = true
        }
        else {
            element.innerHTML = `<img src=" https://t3.ftcdn.net/jpg/02/92/85/46/360_F_292854695_LPwCvK8gRt4saZvG06gwwYtOvzwohe5s.jpg" />`
            user = false
        }
    }
}

function clearboxes() {

    let inner_div = document.getElementsByClassName("inner-div")

    if (inner_div.innerHTML !== "") {
        for (let i = 0; i <= inner_div.length; i++) {
            if (inner_div[i].innerHTML != "") {
                inner_div[i].innerHTML = ""
            }
        }
    }
    else if (inner_div.innerHTML == "") {
        alert("helo")

    }
}

