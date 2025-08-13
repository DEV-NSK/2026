// Get the circle elements
var circle1 = document.getElementById("circle1"); // Red
var circle2 = document.getElementById("circle2"); // Yellow
var circle3 = document.getElementById("circle3"); // Green

// Function to handle color changes
function colorHandler(color) {
    // Reset all colors first
    circle1.style.backgroundColor = "black";
    circle2.style.backgroundColor = "black";
    circle3.style.backgroundColor = "black";

    // Set the selected one
    if (color === "red") {
        circle1.style.backgroundColor = "red";
    } else if (color === "yellow") {
        circle2.style.backgroundColor = "yellow";
    } else if (color === "green") {
        circle3.style.backgroundColor = "green";
    }
}
