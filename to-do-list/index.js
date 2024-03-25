let list = document.getElementById("parent-list");
let innerList = document.getElementById("list");
let TaskInput = document.getElementById("task_input");


function addTask() {
    if (TaskInput.value != "") {
        // list.innerHTML += TaskInput.value + `<button onclick="DeleteLine(this)"> Delete </ button>` + `<br />`; // sbsy pehly yeh banaya hy

        list.innerHTML += `<li id="list" onclick="DeleteLine(this)">${TaskInput.value} <button> Delete </ button></li>`;

    }
    else {
        alert("please enter the task to add")
    }
}

function DeleteLine(element) {
    element.style.display = "none"
}


function ClearTask() {
    if (list.innerHTML != "") {
        TaskInput.value = ""
        list.innerHTML = ""
    }
    else {
        alert("Task is empty")
    }
}