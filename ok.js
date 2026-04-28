// const btn = document.getElementById("generateBtn");
// const input = document.getElementById("cardCount");
// const container = document.getElementById("cardContainer");

// const messages = [
//   "You are amazing ✨",
//   "Keep pushing forward 🚀",
//   "You’ve got this 💪",
//   "Stay positive 🌈",
//   "Success is yours 🔥",
//   "You’re doing great 👏",
//   "Never give up 💯"
// ];

// btn.addEventListener("click", () => {
//   const count = parseInt(input.value);

//   // clear previous cards
//   container.innerHTML = "";

//   if (!count || count <= 0) {
//     container.innerHTML = "<p>Enter a valid number</p>";
//     return;
//   }

//   for (let i = 0; i < count; i++) {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     const randomIndex = Math.floor(Math.random() * messages.length);
//     card.textContent = messages[randomIndex];

//     container.appendChild(card);
//   }
// });


//


