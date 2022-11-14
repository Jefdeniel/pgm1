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

// Footer text
footerString =
  "Copyright 2022 Associate Degree in Computer programming | Artevelde University of Applied Sciences | Disclaimer";
const $footer = document.querySelector(".footer");
$footer.append(footerString);
