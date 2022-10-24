"use strict";

void (function () {})();

const lineupElement = document.getElementById("lineup");

const pElements = document.getElementsByTagName("p");
for (let i = 0; i < pElements.length; i++) {
  console.log(pElements.item(i));
}

const cElements = document.getElementsByClassName("bit");
for (let i = 0; i < cElements.length; i++) {
  console.log(cElements.item(i));
}
