// dom manipulation

// const title = document.querySelector("#main-heading");
// title.style.color = "red";
// console.log(title);

// STYLING ELEMENTS

// const listItems = document.querySelectorAll("list-items");
// for (i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "5rem";
//}

// console.log(listItems);

// CREATING ELEMENTS

const ul = document.querySelector("ul");
const li = document.createElement("li");

// adding element
ul.append(li);

// MODIFYING THE TEXT

// const firstListItem = document.querySelector(".list-items");
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
//console.log(firstListItem.innerHTML);

li.innerText = "x-men";

// MODIFYING ATRIBUTES AND CLASSES

// li.setAttribute("id", "main-heading");
// li.removeAttribute("id");

// const title = document.querySelector("#main-heading");
// console.log(title.getAttribute("id"));

// li.classList.add("list-items");

li.classList.add("list-items");

console.log(li.classList.contains("list-items"));

// REMOVE ELEMENTS

li.remove();
