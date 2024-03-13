// let h1 = document.getElementById("h1")

// let name1 = prompt("Enter Your First Name.....");
// let name2 = prompt("Enter Your Second Name.....");


// let result = name1 + `&nbsp` + name2;
// h1.innerHTML = result;
// console.log(result)



// let h1 = document.getElementById("h1")

// let TableNumberOne = +prompt("Enter Number For Table .....");

// for (let i = 1; i <= 10; i++) {
//     let result = TableNumberOne + "x" + i + "=" + TableNumberOne * i + "<br />";
//     h1.innerHTML += result;
// }

let h1 = document.getElementById("h1")
let btn = document.getElementById('btn')

// input number 
let num = document.getElementById('num')


function TableGenerator() {
    h1.innerHTML = "";
    if (num.value === "") {
        alert("Please Enter The Value")
    }
    else if (num.value != "") {
        for (let i = 1; i <= 10; i++) {
            let result = num.value + "x" + i + "=" + num.value * i + "<br />";
            h1.innerHTML += result;
        }
    }
    else {
        alert("Please Enter The Value")
    }
}

function ClearTable() {
    if (h1.innerHTML != "") {
        h1.innerHTML = ""
        num.value = ""
    } else {
        alert("The table is already clear!")
    }
}