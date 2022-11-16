(() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
      this.cacheElements();
      this.buildUI();
      this.registerListeners();
    },
    buildUI() {
      console.log("3. Build the user interface!");
      this.$boxes.innerHTML = this.generateHTMLForBoxes(100);
    },
    cacheElements() {
      console.log("2. Cache all existing DOM elements!");
      this.$boxes = document.querySelector(".boxes .boxes__list");
      this.$boxSelectedValue = document.querySelector(
        ".boxes .boxes__box--selected .boxes__value"
      );
      this.$boxSelectedClicks = document.querySelector(
        ".boxes .boxes__box--selected .boxes__clicks"
      );
      this.boxClicks = 0;
    },
    generateHTMLForBoxes(amount) {
      let tempStr = "";
      for (let i = 1; i <= amount; i++) {
        tempStr += `<div class="boxes__box" data-id="${i}">${i}</div>`;
      }
      return tempStr;
    },
    registerListeners() {
      const $boxList = this.$boxes.querySelectorAll(".boxes .boxes__box");
      $boxList.forEach((box) => {
        box.addEventListener("click", (event) => {
          window.clicks++;
          const id = event.target.dataset.id;
          this.boxClicks++;
          this.showBoxDetails(id);
        });
      });
    },
    showBoxDetails(id) {
      this.$boxSelectedValue.innerHTML = id;
      this.$boxSelectedClicks.innerHTML = this.boxClicks;
    },
  };
  app.initialize();
})();
