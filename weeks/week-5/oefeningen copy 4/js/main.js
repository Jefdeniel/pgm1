(() => {
  const app = {
    init() {
      console.log("1. Application Initialized");
      // Variables
      this.direction = 1;
      // call the funcion cacheElements
      this.cacheElements();
      //Call the function generateUI
      this.generateUI();
    },
    cacheElements() {
      console.log("2. cache the elements");
      // Get the element with class name key__container
      this.$keyContainer = document.querySelector(".key__container");
      document.addEventListener("keypress", (ev) => {
        this.generateKeyElement(ev.key);
      });
    },
    generateUI() {
      console.log("3. Generate user interface");
    },
    generateKeyElement(key) {
      const w = this.$keyContainer.clientWidth;
      const h = this.$keyContainer.clientHeight;
      const x = Math.round(Math.random() * w);
      const y = Math.round(Math.random() * h);

      const $key = document.createElement("div");
      $key.classList.add("key");
      $key.innerText = key;
      $key.style.transform = `translateX(${x}px) translateY(${y}px)`;
      this.$keyContainer.appendChild(key);
    },
  };
  app.init();
})();
