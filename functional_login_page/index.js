let email = document.getElementById("email")
let password = document.getElementById("password")


const signUp = () => {
    let forEmail = localStorage.getItem('email')
    let forPass = localStorage.getItem('password')
    if (forEmail === null && forPass === null) {
        if (email.value !== '' && password.value !== '') {
            localStorage.setItem('email', email.value);
            localStorage.setItem('password', password.value);
            alert('SignUp Successfully')
            window.location.pathname = '/home.html'
        }
        else {
            alert('Please enter email and password')
        }
    }
    else if (forEmail !== null && forPass !== null) {
        alert('You already sign Up please Login')
    }
    else {
        alert('Please refresh your site')
    }
}


const login = () => {
    let forEmail = localStorage.getItem('email')
    let forPass = localStorage.getItem('password')

    if (email.value !== '' && password.value !== '') {
        if (forEmail !== null && forPass !== null) {
            if (email.value === forEmail && password.value === forPass) {
                alert('Login Successfully')
                window.location.pathname = '/home.html'
            }
            else {
                alert('Invalid email and Password \nPlease enter correct email and password')
            }
        } else {
            alert('Please SignUp first')
        }
    } else {
        alert('Please enter email and password')
    }
}


const logOut = () => {
    localStorage.clear('email')
    localStorage.clear('password')
    alert('Log Out Successfully')

    if (window.location.pathname == '/home.html') {
        window.location.pathname = '/index.html'

    }
}


const loginCheck = () => {
    let forEmail = localStorage.getItem('email')
    let forPass = localStorage.getItem('password')
    if (forEmail !== null && forPass !== null) {
        if (window.location.pathname != '/home.html') {
            window.location.pathname = '/home.html'
        }
    }
}
// Hide and show password and change emoji on click as in situation

let EmojiShowAndHide = document.getElementById('showHIDEpassword')
EmojiShowAndHide.addEventListener('click', () => {
    showHIDEpassword()
})
const showHIDEpassword = () => {
    EmojiShowAndHide.innerHTML = ``
    if (password.type === 'password') {
        EmojiShowAndHide.innerHTML = `👀`
        password.type = 'text'
    }
    else {
        password.type = 'password'
        EmojiShowAndHide.innerHTML = `🙈`
    }
}