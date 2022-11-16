(() => {
  const app = {
    init() {
      console.log("1. Application Initialized");
      // Variables
      // call the funcion cacheElements
      this.cacheElements();
      //Call the function generateUI
      this.generateUI();
    },
    cacheElements() {
      console.log("2. cache the elements");
      // Get the element with class name key__container
    },
    generateUI() {
      console.log("3. Generate user interface");
    },
  };
  app.init();
})();

/* HEADING */

const $firstHeader = document.querySelector(".header");
console.log($firstHeader);
// Place text for header into the div
const nav = document.createElement("nav");

const navItem1 = document.createElement("a");
navItem1.href = "#";
navItem1.innerText = "Projecten";
nav.appendChild(navItem1);

const navItem2 = document.createElement("a");
navItem2.href = "#";
navItem2.innerText = "Graduaat Programmeren";
nav.appendChild(navItem2);

const navItem3 = document.createElement("a");
navItem3.href = "#";
navItem3.innerText = "Programmeren";
nav.appendChild(navItem3);

$firstHeader.appendChild(nav);

// Footer text //
footerString =
  "Copyright 2022 Associate Degree in Computer programming | Artevelde University of Applied Sciences | Disclaimer";
const $footer = document.querySelector(".footer");
$footer.append(footerString);

// Socials

const $socials = document.querySelector(".socials");

const images = socials.map((social) => {
  const imgElement = document.createElement("img");
  imgElement.src = social.logo;
  return imgElement;
});

for (let img of images) {
  $socials.append(img);
}
