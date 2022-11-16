// DOM manipulation

// Event delegation

// It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descenedants that match a selector

// document.querySelector("#football").addEventListener("click", function (e) {
//   console.log("football is clicked");

//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "red";
//   }
// });

// document.querySelector("#basketball").addEventListener("click", function (e) {
//   console.log("basketball is clicked");

//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "blue";
//   }
// });

// document.querySelector("#tennis").addEventListener("click", function (e) {
//   console.log("tennis is clicked");

//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "pink";
//   }
// });

document.querySelector("#sports").addEventListener("click", function(e) {
  console.log(e.target.getAttribute("id" + "is clicked";))

  const target = e.target;

  if(target.matches("li")) {
    target.style.backgroundColor = "red";
  }

})

const sports = document.querySelector("#sports");
const newSports = document.createElement("li");

newSports.innerText = "rugby"
newSports.setAttribute("id", "rugby");

sports.appendChild(newSports);