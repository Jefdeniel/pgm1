(() => {
  const app = {
    initialize() {
      console.log("1. Application started!");
      this.cacheElements();
      this.buildUI();
    },
    buildUI() {
      console.log("3. Build the user interface!");
      this.$tagCloud.innerHTML = this.generateHTMLForTagCloud();
    },
    cacheElements() {
      console.log("2. Chache all exisiting DOM elements!");
      this.$tagCloud = document.querySelector(".tag-cloud");
    },
    generateHTMLForTagCloud() {
      let tempStr = "",
        x = 0,
        y = 0,
        fS = 1,
        angle = 0;
      tagCloudData.forEach((word, index) => {
        x = Math.random() * this.$tagCloud.clientWidth;
        y = Math.random() * this.$tagCloud.clientHeight;
        fS = word.length / 2;
        angle = Math.random() * 365;
        tempStr += `<div class="tag-cloud__word" style="top: ${y}px; left: ${x}px; font-size: ${fS}rem; transform: rotate(${angle}deg);">${word}</div>`;
      });
      return tempStr;
    },
  };
  app.initialize();
})();
