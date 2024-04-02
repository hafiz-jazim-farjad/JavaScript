// promises practice


let mypromis1 = new Promise((resolve, reject) => {
    let a = 5
    let b = 6

    if (a === b) {
        console.log(`${a} is equal to ${b}`);
        resolve("they are equal")
    } else {
        console.log(`${a} is not equal to ${b}`);
        reject("They are not equal")
    }
});


mypromis1.then((s) => {
    console.log(s)
}).catch((e) => {
    console.log(e)
});




// secound example

let user1 = +prompt("Enter one number to addition ");
let user2 = +prompt("Enter second number to addition ");

let mypromis = new Promise((solved, unsolved) => {
    if (user1 === user2) {
        solved(`${user1} and ${user2} is equal`);
    } else {
        unsolved(`${user1} and ${user2} is not equal`);
    }
});

mypromis.then((forSolve) => {
    alert(forSolve)
}).catch((notSolve) => {
    alert(notSolve)
})