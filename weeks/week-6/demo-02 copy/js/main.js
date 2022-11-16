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
      // Get the element with class name students-list
    },
    generateUI() {
      console.log("3. Generate user interface");
    },
  };
  app.init();
})();
