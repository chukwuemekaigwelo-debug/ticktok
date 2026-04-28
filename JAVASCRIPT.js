// let count = 0;
// let interval = null;

// const countDisplay = document.getElementById("count");
// const startBtn = document.getElementById("startBtn");
// const stopBtn = document.getElementById("stopBtn");

// // Start counting
// startBtn.addEventListener("click", function () {
//   if (interval === null) {
//     interval = setInterval(() => {
//       count++;
//       countDisplay.textContent = count;
//     }, 1000);
//   }
// });

// // Stop counting
// stopBtn.addEventListener("click", function () {
//   clearInterval(interval);
//   interval = null;
// });



// array
// a way to store multiple variables in a single variable

//without array
let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "orange";

//with array
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); 


const compliments = [
    "You look great today!",    
    "You're doing an amazing job!",
    "Your smile is contagious!",
    "You have a fantastic sense of humor!",
]


function generateCompliment() {
    const name = document.getElementById("nameInput").value;
    
    const randomIndex = Math.floor(Math.random() * compliments.length);

    document.getElementById("complimentDisplay").textContent = `${compliments[randomIndex]} ${name}`;
}