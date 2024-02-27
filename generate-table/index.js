// // arrays 

// let names = ["Alice", "Bob", "Charlie"];
// console.log(names[0]); // Alice
// console.log(names[1]); // Bob


// let names1 = ["name1" , "name 2" , "name 3" , "name 4"]

// for (let i = 0; i < names1.length; i++) {
//     document.write(names1[i] + "<br>");
// }

// // adding to an array
// names[3] = "David";
// console.log(names); // [ 'Alice', 'Bob', 'Charlie', 'David' ]

// // removing from an array (splicing)
// names.splice(2, 1); // remove one item at index 2
// console.log(names); // [ 'Alice', 'Bob', 'David' ]

// // appending items to the end of an array with push()
// names.push("Eve");
// console.log(names); // [ 'Alice', 'Bob', 'David', 'Eve' ]

// // inserting items into an array at a specific position with splice()
// names.splice(1, 0, "Alan");
// console.log(names); // [ 'Alice', 'Alan', 'Bob', 'David', 'Eve' ]

// // checking if an array contains something using includes()
// console.log(names.includes("Bob"));    // true
// console.log(names.includes("Fred"));   // false

// // getting the index of an element in an array using indexOf()
// var index = names.indexOf("Bob");
// console.log(index); // 1

// // sorting an array using sort() - sorts in place!
// names.sort();
// console.log(names); // [ 'Alan', 'Alice', 'Bob', 'David', 'Eve' ]

// // reversing an array using reverse() - also changes the original array
// names.reverse();
// console.log(names); // [ 'Eve', 'David', 'Bob', 'Alice', 'Alan' ]

// // creating multidimensional arrays / arrays of arrays
// let matrix = [[1, 2], [3, 4]];
// console.log(matrix[0][0]); // 1
// console.log(matrix[1][1]); // 4


// table 
// generate table from prompt  

// for tables 
// let table = +prompt("Enter number for tables");
// for (let i = 1; i <= 10; i++) {
//     document.write(table + " x " + i + " = " + table * i + "<br>")
// }

// generate table from input  

// let p = document.getElementById("demo")
// p.innerHTML == "";
// let table = document.getElementById("table_input")
// function generateTable() {
//     for (let i = 1; i <= 10; i++) {
//         p.innerHTML = ("<table>" + "<tr>" + "<td>" + table.value + "</td>" + "<td>" + " x " + "</td>" + "<td>" + i + "</td>" + "<td>" + " = " + "</td>" + "<td>" + table.value * i + "</td>" + "</tr>" + "</table>" + "<br>");
//     }
// }


let p = document.getElementById("demo");
let table = document.getElementById("table_input");

function generateTable() {
    let tableHTML = "<table>";
    for (let i = 1; i <= 10; i++) {
        tableHTML += "<tr>" + "<td>" + table.value + "</td>" + "<td>" + " x " + "</td>" + "<td>" + i + "</td>" + "<td>" + " = " + "</td>" + "<td>" + table.value * i + "</td>" + "</tr>";
    }
    tableHTML += "</table>";
    p.innerHTML = tableHTML;
}
