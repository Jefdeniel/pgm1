(() => {
  const app = {
    init() {
      console.log("1. Application Initialized");
      // call the funcion cacheElements
      this.cacheElements();
      //Call the function generateUI
      this.generateUI();
    },
    cacheElements() {
      console.log("2. cache the elements");
      // Get element with class name waves
      this.$waves = document.querySelector(".waves");
      console.log(this.$waves);
      // Add attribute to waves element
      this.$waves.setAttribute("data-id", "123456789");
    },
    generateUI() {
      console.log("3. Generate user interface");
      let outputStr = "",
        angle = 0;
      for (let i = 0; i < 200; i++) {
        angle = Math.round((360 / 200) * i);
        saturation = Math.round((360 / 200) * i);
        outputStr += `<div class="wave" style="transform:rotate(${angle}deg); background-color: hsl(${saturation}, 50%,50%)">WAVE</div>`;
      }
      this.$waves.innerHTML = outputStr;
    },
  };
  app.init();
})();
