let main = document.getElementById('main')
let heading = document.getElementById('heading')


function ChangeColor(color) {
    main.style.backgroundColor = color
}


function ChangeCase(textCase) {
    heading.style.textTransform = textCase
}

function PageReset() {
    // main.style.display = 'none'
    main.innerHTML = ''
}
