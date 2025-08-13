var container = document.getElementById("container");
var images = document.createElement("img");

container.appendChild(images)

function virat() {
    images.src = "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
}

function rohit() {
    images.src = "https://images.moneycontrol.com/static-mcnews/2025/02/20250210052846_Rohit-Sharma-BCCI.jpg?impolicy=website&width=770&height=431"
}

function hardik() {
    images.src = "https://www.hindustantimes.com/ht-img/img/2025/04/05/550x309/PTI04-04-2025-000518A-0_1743817825873_1743817840493.jpg"
}

document.body.appendChild(container)