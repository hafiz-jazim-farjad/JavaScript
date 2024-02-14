let h1 = document.getElementById("heading")
let button = document.getElementById("button")
let container = document.getElementById("container")
h1.style.display = "none";
button.style.transform = "scale(1)";



// button zoom-in zoom-out  

setInterval(() => {
    if (button.style.transform == "scale(1)") {
        button.style.transform = "scale(1.2)";
    } else {
        button.style.transform = "scale(1)";

    }
}, 500);

// click krny ky bad container div ki alignment change hongi 
function AlignmentsStart() {
    setInterval(() => {
        if (button.innerHTML == "click to see all Alignments" && h1.style.display == "none") {
            button.style.display = "none";
            h1.style.display = "block";
            h1.innerHTML = "Alignments.....";
        } 
        
        else if (h1.innerHTML == "Alignments.....") {
            container.style.transition = "0.5s";
            h1.innerHTML = "Top-Left";
            container.style.backgroundColor = "#2B1B99";
            container.style.alignItems = "start";
            container.style.justifyContent = "start";
        } 
        
        else if (h1.innerHTML == "Top-Left") {
            h1.style.display = "block";
            container.style.transition = "0.5s";
            h1.innerHTML = "Top-Center";
            container.style.backgroundColor = "#69BAFA";
            container.style.alignItems = "start";
            container.style.justifyContent = "center";
        } 
        
        else if (h1.innerHTML == "Top-Center") {
            h1.style.display = "block";
            container.style.transition = "0.5s";
            h1.innerHTML = "Top-Right";
            container.style.backgroundColor = "#F6B742";
            container.style.alignItems = "start";
            container.style.justifyContent = "end";
        } 
        
        else if (h1.innerHTML == "Top-Right") {
            h1.style.display = "block";
            container.style.transition = "0.5s";
            h1.innerHTML = "Center-Left";
            container.style.backgroundColor = "#ED5659";
            container.style.alignItems = "center";
            container.style.justifyContent = "start";
        } 
        
        else if (h1.innerHTML == "Center-Left") {
            h1.style.display = "block";
            container.style.transition = "0.5s";
            h1.innerHTML = "Center-Center";
            container.style.backgroundColor = "#A094F8";
            container.style.alignItems = "center";
            container.style.justifyContent = "center";
        } 
        
        else if (h1.innerHTML == "Center-Center") {
            h1.style.display = "block";
            container.style.transition = "0.5s";
            h1.innerHTML = "Center-Right";
            container.style.backgroundColor = "#CE3D85";
            container.style.alignItems = "center";
            container.style.justifyContent = "end";
        } 
        
        else if (h1.innerHTML == "Center-Right") {
            h1.style.display = "block";
            container.style.transition = "0.5s";
            h1.innerHTML = "Bottom-Left";
            container.style.backgroundColor = "#34202E";
            container.style.alignItems = "end";
            container.style.justifyContent = "start";
        } 
        
        else if (h1.innerHTML == "Bottom-Left") {
            h1.style.display = "block";
            container.style.transition = "0.5s";
            h1.innerHTML = "Bottom-Center";
            container.style.backgroundColor = "orange";
            container.style.alignItems = "end";
            container.style.justifyContent = "center";
        } 
        
        else if (h1.innerHTML == "Bottom-Center") {
            h1.style.display = "block";
            container.style.transition = "0.5s";
            h1.innerHTML = "Bottom-Right";
            container.style.backgroundColor = "#82808C";
            container.style.alignItems = "end";
            container.style.justifyContent = "end";
        } else {
            h1.style.display = "block";
            container.style.transition = "0.5s";
            h1.innerHTML = "Top-Left";
            container.style.backgroundColor = "#2B1B99";
            container.style.alignItems = "start";
            container.style.justifyContent = "start";
        }

    }, 1500);

}