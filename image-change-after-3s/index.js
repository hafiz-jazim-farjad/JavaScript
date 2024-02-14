let ForImageChange = document.getElementById("ChangeImage");

setInterval(() => {
    if (ForImageChange.src.includes("/mobile-image-0.png")) {
        ForImageChange.src = "mobile-image-1.png";
    }
    else if (ForImageChange.src.includes("/mobile-image-1.png")) {
        ForImageChange.src = "mobile-image-2.png";
    }
    else if (ForImageChange.src.includes("/mobile-image-2.png")) {
        ForImageChange.src = "mobile-image-3.png";
    }
    else {
        ForImageChange.src = "mobile-image-0.png";
    }
}, 3000);