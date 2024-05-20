let regexForEmail = /^\S+@\S+\.\S+$/;

let user = prompt('enter email address')

let CheckEmail = regexForEmail.test(user)
console.log(CheckEmail);
