// let h1 = document.getElementById("h1")
// setInterval(() => {
//     if (h1.innerHTML == "Heading 1") {
//         h1.innerHTML = "Heading 2"
//     }
//     else if (h1.innerHTML == "Heading 2") {
//         h1.innerHTML = "Heading 3"
//     }
//     else if (h1.innerHTML == "Heading 3") {
//         h1.innerHTML = "Heading 4"
//     }
//     else if (h1.innerHTML == "Heading 4") {
//         h1.innerHTML = "Heading 5"
//     }
//     else {
//         h1.innerHTML = "Heading 1"
//     }
// }, 1000);



let box = document.getElementById("box")

// let cars = [
//     {
//         Name: 'car1',
//         Image: '..//assests/car1.jpg',
//         Brand_Name: 'Toyota',
//         price: '500,000',
//     },
//     {
//         Name: 'car2',
//         Image: '..//assests/car2.png',
//         Brand_Name: 'Toyota',
//         price: '500,000',
//     },
//     {
//         Name: 'car3',
//         Image: '..//assests/car3.jpg',
//         Brand_Name: 'Toyota',
//         price: '500,000',
//     },
//     {
//         Name: 'car4',
//         Image: '..//assests/car4.jpg',
//         Brand_Name: 'Toyota',
//         price: '500,000',
//     },
//     {
//         Name: 'car5',
//         Image: '..//assests/car5.webp',
//         Brand_Name: 'Toyota',
//         price: '500,000',
//     },
//     {
//         Name: 'car6',
//         Image: '..//assests/car6.jpeg',
//         Brand_Name: 'Toyota',
//         price: '500,000',
//     },
//     {
//         Name: 'car7',
//         Image: '..//assests/car7.webp',
//         Brand_Name: 'Toyota',
//         price: '500,000',
//     },
// ]

// for (let i = 0; i <= cars.length; i++) {
//     box.innerHTML +=
//         ` <div class="products"> 
//             <img src="${cars[i].Image}" />
//             <p> <strong> Product#: </strong> <span> ${cars[i].Name} </span> </p>
//             <p> <strong> Brand: </strong> <span> ${cars[i].Brand_Name} </span> </p>
//             <p> <strong> Price: </strong>RS <span> ${cars[i].price} </span> </p>
//         </div> `;
// };

fetch('https://dummyjson.com/products/')
    .then(res => res.json())
    .then(json => {
        let APIproducts = json.products;
        // console.log(APIproducts[1]);

        for (let pro = 0; pro <= APIproducts.length; pro++) {
            box.innerHTML +=
                ` <div class="products"> 
                    <img src="${APIproducts[pro].thumbnail}" />
                    <p> <strong> Product#: </strong> <span> ${APIproducts[pro].id} </span> </p>
                    <p> <strong> Brand: </strong> <span> ${APIproducts[pro].brand} </span> </p>
                    <p> <strong> Product Name: </strong> <span> ${APIproducts[pro].title} </span> </p>
                    <p> <strong> Price: </strong>RS <span> ${APIproducts[pro].price} </span> </p>
                    <p> <strong> Description: </strong> <span> ${APIproducts[pro].description} </span> </p>
                <!--<p> <strong> Rating: </strong> <span> ${APIproducts[pro].rating} </span> </p>
                    <p> <strong> Stock: </strong> <span> ${APIproducts[pro].stock} </span> </p> -->
                </div> `;
        }
    })