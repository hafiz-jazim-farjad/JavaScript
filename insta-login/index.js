let MobileImage = document.getElementById("mobile-image")


// setTimeout(() => {
//     MobileImage.src = "./mobile-image-2.png"
// }, 2000);



setInterval(() => {
    MobileImage.style.opacity = "0.5";
    
    setTimeout(() => {
        MobileImage.style.opacity = "1";
    }, 250);

    if (MobileImage.src.includes("/mobile-image-0.png")) {
        MobileImage.src = "./mobile-image-1.png";
    }
    else if (MobileImage.src.includes("/mobile-image-1.png")) {
        MobileImage.src = "./mobile-image-2.png";
    }
    else if (MobileImage.src.includes("/mobile-image-2.png")) {
        MobileImage.src = "./mobile-image-3.png";
    }
    else if (MobileImage.src.includes("/mobile-image-3.png")) {
        MobileImage.src = "./mobile-image-0.png";
    }
    else {
        console.log("done")
    }


}, 3000);