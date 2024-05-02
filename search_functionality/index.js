let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let resultDiv = document.getElementById("resultDiv");


let mainData = [
    {
        name: "Seth Verma",
        email: "elit.aliquam.auctor@outlook.couk",
        company: "Vestibulum Associates",
    },
    {
        name: "Giacomo Lata",
        email: "euismod.enim@yahoo.org",
        company: "Tincidunt Tempus PC",
    },
    {
        name: "Chadwick Saini",
        email: "porttitor@outlook.ca",
        company: "Tristique Ac Ltd",
    },
    {
        name: "Whilemina Kumar",
        email: "purus.mauris@yahoo.edu",
        company: "In Associates",
    },
    {
        name: "Gretchen Sahni",
        email: "lorem.vitae@icloud.couk",
        company: "Est LLC",
    },
    {
        name: "Anika Manohar",
        email: "cras.interdum@google.couk",
        company: "Nullam Company",
    },
    {
        name: "Jacob Sehgal",
        email: "elit@hotmail.edu",
        company: "Purus Gravida Sagittis Corporation",
    },
    {
        name: "Naomi Kapoor",
        email: "nec.imperdiet@icloud.ca",
        company: "Luctus Ipsum Leo PC",
    },
    {
        name: "Shay Chaudhary",
        email: "dui@outlook.net",
        company: "Tellus Phasellus Elit Incorporated",
    },
    {
        name: "Amaya Darsha",
        email: "phasellus.in.felis@hotmail.net",
        company: "Vitae Mauris Industries",
    },
    {
        name: "Vance Malhotra",
        email: "felis.orci.adipiscing@aol.net",
        company: "Feugiat Lorem Ipsum Industries",
    },
    {
        name: "Cassandra Bhatt",
        email: "nibh@yahoo.net",
        company: "Vivamus Sit Ltd",
    },
    {
        name: "Ethan Chande",
        email: "pharetra.felis.eget@outlook.edu",
        company: "Ut Odio Vel Ltd",
    },

];

let customizedData = [
    {
        name: "Seth Verma",
        email: "elit.aliquam.auctor@outlook.couk",
        company: "Vestibulum Associates",
    },
    {
        name: "Giacomo Lata",
        email: "euismod.enim@yahoo.org",
        company: "Tincidunt Tempus PC",
    },
    {
        name: "Chadwick Saini",
        email: "porttitor@outlook.ca",
        company: "Tristique Ac Ltd",
    },
    {
        name: "Whilemina Kumar",
        email: "purus.mauris@yahoo.edu",
        company: "In Associates",
    },
    {
        name: "Gretchen Sahni",
        email: "lorem.vitae@icloud.couk",
        company: "Est LLC",
    },
    {
        name: "Anika Manohar",
        email: "cras.interdum@google.couk",
        company: "Nullam Company",
    },
    {
        name: "Jacob Sehgal",
        email: "elit@hotmail.edu",
        company: "Purus Gravida Sagittis Corporation",
    },
    {
        name: "Naomi Kapoor",
        email: "nec.imperdiet@icloud.ca",
        company: "Luctus Ipsum Leo PC",
    },
    {
        name: "Shay Chaudhary",
        email: "dui@outlook.net",
        company: "Tellus Phasellus Elit Incorporated",
    },
    {
        name: "Amaya Darsha",
        email: "phasellus.in.felis@hotmail.net",
        company: "Vitae Mauris Industries",
    },
    {
        name: "Vance Malhotra",
        email: "felis.orci.adipiscing@aol.net",
        company: "Feugiat Lorem Ipsum Industries",
    },
    {
        name: "Cassandra Bhatt",
        email: "nibh@yahoo.net",
        company: "Vivamus Sit Ltd",
    },
    {
        name: "Ethan Chande",
        email: "pharetra.felis.eget@outlook.edu",
        company: "Ut Odio Vel Ltd",
    },
];

const search = () => {
    let searchValue = searchInput.value.toLowerCase();
    let filterArray = mainData.filter((items) => {
        return (
            items.name.includes(searchValue) ||
            items.email.includes(searchValue) ||
            items.company.includes(searchValue)
        );
    });
    customizedData = filterArray;
    renderList();
};

const renderList = () => {
    resultDiv.innerHTML = "";
    for (let i = 0; i < customizedData.length; i++) {
        resultDiv.innerHTML += `
        ${customizedData[i].name.toLocaleUpperCase()} <br />  
        ${customizedData[i].email.toLocaleUpperCase()} <br />
        ${customizedData[i].company.toLocaleUpperCase()} <br /> <hr /> `;
    }
};

const searchBtnClick = () => {
    if (searchInput.value !== '') {
        search();
    }
    else {
        alert('Please Enter Something to Search , Thanks!')
    }
}

const forFocus = () => renderList();

const forBlured = () => resultDiv.innerHTML = "";
