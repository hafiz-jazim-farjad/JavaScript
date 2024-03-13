let main_div = document.getElementById("main-div")


let colors = ["silver", "maroon", "red", "purple", "fushsia", "green", "lime", "olive", "yellow", "navy"];
for (let i = 1; i <= 10; i++) {
    main_div.innerHTML += `<div id="inner-main"  onclick="deletebox(this)"  style="background-color: ${colors[i]} ;"> ${i} </div>`;
}

function deletebox(jazim) {
    jazim.style.display = "none";
}