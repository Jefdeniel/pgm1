(() => {
  const app = {
    init() {
      console.log("1. Application Initialized");
      // Variables

      this.cacheElements();
      //Call the function generateUI
      this.generateUI();
    },
    cacheElements() {
      console.log("2. cache the elements");
      this.$firstHeader = document.querySelector(".header");
      this.$events = document.querySelector(".intro");
      this.$projects = document.querySelector(".projects");
      this.$socials = document.querySelector(".socials");
      this.$footer = document.querySelector(".footer");
      this.$clockCurrentYear = document.querySelector(".clock-current-year");
      this.$clockNextYear = document.querySelector(".clock-next-year");
    },
    generateUI() {
      console.log("3. Generate user interface");
      this.generateUIForHeader();
      this.generateUIForEvents();
      this.generateUIForProjects();
      this.generateUIforSocials();
      this.generateUIForFooter();
      this.generateUIForStopwatch();
      this.GenerateUIForCountdown();
    },
    generateUIForHeader() {
      // Place text for header into the div
      const nav = document.createElement("nav");
      // Place item 1 in div
      const navItem1 = document.createElement("a");
      navItem1.href = "#";
      navItem1.innerText = "Projecten";
      nav.appendChild(navItem1);
      // Place item 2 in div
      const navItem2 = document.createElement("a");
      navItem2.href = "#";
      navItem2.innerText = "Graduaat Programmeren";
      nav.appendChild(navItem2);
      // Place item 3 in div
      const navItem3 = document.createElement("a");
      navItem3.href = "#";
      navItem3.innerText = "Programmeren";
      nav.appendChild(navItem3);

      this.$firstHeader.appendChild(nav);
    },
    generateUIForEvents() {
      this.$events.append(events.map((e) => e.title).join(" - "));
    },

    generateUIForProjects() {
      projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("card");

        projectDiv.div = "test";

        const projectImg = document.createElement("img");
        projectImg.classList.add("img_project");
        projectImg.src = `./images/${project.author.lastName.toLowerCase()}${project.author.firstName.toLowerCase()}/${
          project.screenshots[0]
        }`;

        const projectAuthor = document.createElement("p");
        projectAuthor.innerText =
          project.author.firstName + " " + project.author.lastName;

        const projectTitle = document.createElement("h3");
        projectTitle.innerText = project.title;

        // aan stefaan vragen: dom of niet?
        const projectTechnologies = document.createElement("p");
        const selected = project.technologies.find(
          (e) => e.technologies == Number
        );
        projectTechnologies.innerText = selected;

        projectDiv.append(
          projectImg,
          projectAuthor,
          projectTitle,
          projectTechnologies
        );
        this.$projects.append(projectDiv);
      });

      const card = document.querySelectorAll(".card");

      card.forEach((card) => {
        card.addEventListener("click", (project) => {
          const OpenCard = document.createElement("div");
          OpenCard.classList.add("open_card");
          this.$projects.append(OpenCard);

          const CardTitle = document.createElement("h3");
          CardTitle.innerText = project.title;

          this.openCard.append(CardTitle);
          // console.log(CardTitle);
        });
      });
    },
    generateUIforSocials() {
      const images = socials.map((social) => {
        const imgElement = document.createElement("img");
        imgElement.classList.add("img_socials");
        imgElement.src = social.logo;
        return imgElement;
      });

      for (let img of images) {
        this.$socials.append(img);
      }
    },
    generateUIForFooter() {
      footerString =
        "Copyright 2022 Associate Degree in Computer programming | Artevelde University of Applied Sciences | Disclaimer";
      this.$footer.append(footerString);
    },
    generateUIForStopwatch() {
      // Datum naar waar we moeten aftellen
      const startDate = new Date(1663569900000); // Output = 2022-09-19T06:45:00.000Z
      // Huidige datum selecteren
      setInterval(() => {
        const dateRightFormat2 = new Date(); // Output = 2022-11-14T09:34:16.517Z

        // Verschil berekenen tussen 2 datums
        const distanceStopWatch = dateRightFormat2 - startDate; // Output 26600836183
        const distanceStopwatchRightFormat =
          distanceStopWatch / (1000 * 3600 * 24); // Output = XXX (days)

        // dagen, uren, minuten en seconden berekenen

        const days1 = Math.floor(distanceStopWatch / (24 * 3600 * 1000));
        const hours1 = Math.floor(
          (distanceStopWatch % (24 * 3600 * 1000)) / (3600 * 1000)
        );
        const minutes1 = Math.floor(
          (distanceStopWatch % (1000 * 3600)) / (60 * 1000)
        );
        const seconds1 = Math.floor((distanceStopWatch % (60 * 1000)) / 1000);

        // const extraString = document.createElement("p");
        // extraString.classList.add("extra_string");
        // extraString.innerText = "running in current academic year 2022-23";

        // dagen, uren, minuten en seconden samenvoegen
        const finalStopwatch =
          days1.toLocaleString("nl-BE", {
            minimumIntegerDigits: 2,
            useGrouping: true,
          }) +
          "days " +
          hours1.toLocaleString("nl-BE", {
            minimumIntegerDigits: 2,
            useGrouping: true,
          }) +
          "h " +
          minutes1.toLocaleString("nl-BE", {
            minimumIntegerDigits: 2,
            useGrouping: true,
          }) +
          "m " +
          +seconds1.toLocaleString("nl-BE", {
            minimumIntegerDigits: 2,
            useGrouping: true,
          }) +
          "s ";
        this.$clockCurrentYear.innerHTML = finalStopwatch;
      }, 500);
    },
    GenerateUIForCountdown() {
      // 325 days 19h 16m 14s
      // till next acadedmix year 2023-24
      const countdownDate = new Date(1695019500000); // Output = 2023-09-18T06:45:00.000Z

      setInterval(() => {
        // Huidige datum selecteren
        const dateCountdownNow = new Date().getTime();
        const dateRightFormat = new Date(dateCountdownNow); // Output = 2022-11-14T09:34:16.517Z

        // Verschil berekenen tussen 2 datums
        const distanceCountdown = countdownDate - dateRightFormat; // Output 26600836183
        const distanceRightFormat = distanceCountdown / (24 * 3600 * 1000); // Output = XXX (days)

        // dagen, uren, minuten en seconden berekenen
        let days2 = Math.floor(distanceCountdown / (1000 * 3600 * 24));
        let hours2 = Math.floor(
          (distanceCountdown % (24 * 60 * 60 * 1000)) / (3600 * 1000)
        );
        let minutes2 = Math.floor(
          (distanceCountdown % (1000 * 3600)) / (1000 * 60)
        );
        let seconds2 = Math.floor((distanceCountdown % (1000 * 60)) / 1000);

        // dagen, uren, minuten en seconden samenvoegen

        let finalTimer =
          days2.toLocaleString("nl-BE", {
            minimumIntegerDigits: 2,
            useGrouping: true,
          }) +
          "days " +
          hours2.toLocaleString("nl-BE", {
            minimumIntegerDigits: 2,
            useGrouping: true,
          }) +
          "h " +
          minutes2.toLocaleString("nl-BE", {
            minimumIntegerDigits: 2,
            useGrouping: true,
          }) +
          "m " +
          seconds2.toLocaleString("nl-BE", {
            minimumIntegerDigits: 2,
            useGrouping: true,
          }) +
          "s";

        this.$clockNextYear.innerHTML = finalTimer;

        const extraStringCountdown = "\n till next academic year 2023-24";
        this.$clockNextYear.append(extraStringCountdown);
      }, 500);
    },
  };
  app.init();
})();
