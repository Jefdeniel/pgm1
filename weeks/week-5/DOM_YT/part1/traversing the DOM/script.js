// DOM MANIPULATION

// TRAVERSE THE DOM

// PARENT NOTE TRAVERSAL

// let ul = document.querySelector("ul");
//console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode);
//console.log(html.parentElement);

// CHILD NODE TRAVERSAL

// let ul = document.querySelector("ul");

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.firstChild.style.backgroundColor = "blue";

//   ul.childNodes[1].style.backgroundColor = "blue";
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// SIBLIND NODE TRAVERSAL

let ul = document.querySelector("ul");
const div = document.querySelector("div");

console.log(div.childNodes);

//console.log(ul.previousSibling);
console.log(ul.previousElementSibling);

console.log(ul.nextSibling);
