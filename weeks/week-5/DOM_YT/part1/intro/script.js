// dom manipulations

// event listeners

const buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert("i also love js");
}

buttonTwo.addEventListener("click", alertBtn);

// MOUSEOVER

const newBackgroundColor = document.querySelector(".box-3");

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);
