const concerts = [
  {
    id: "947c0453-4be1-41b1-9803-270b985cbc2e",
    bandName: "Heideroosjes",
    from: 1660862100000,
    to: 1660865700000,
    place: "Dance Hall",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/LinkinParkBerlin2010.jpg",
    genre: "Rock, Punk, Alternative",
    biography:
      "kin Park is an American rock band from Agoura Hills, California. The band's current lineup comprises vocalist/rhythm guitarist/keyboardist Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell, DJ/turntablist Joe Hahn and drummer Rob Bourdon, all of whom are founding members. Vocalists Mark Wakefield and Chester Bennington are former members of the band. Categorized as alternative rock, Linkin Park's earlier music spanned ",
  },
  {
    id: "a9f61f28-e508-4d47-83fd-352294553ce2",
    bandName: "Stikstof",
    from: 1660856100000,
    to: 1660859700000,
    place: "Dance Hall",
    thumbnail:
      "https://www.hiphopinjesmoel.com/wp-content/uploads/2021/10/STIKSTOFSEPT2111-2048x1366.jpg",
    genre: "hiphop",
    biography:
      "ikstof is een scheikundig element met symbool N en met atoomnummer 7. Stikstof is in het periodiek systeem een niet-metaal uit de stikstofgroep (groep 15). Losse atomen van dit element zijn zeer reactief en verbinden zich, paarsgewijs, direct tot moleculaire distikstof (N2), de natuurlijke, gasvormige verschijningsvorm van stikstof in de aardatmosfeer. Moleculaire stikstof is, in tegenstelling tot dizuur",
  },
];

(() => {
  const app = {
    init() {
      console.log("1. Application Initialized!");
      // Variables
      // Call the function cacheElements
      this.cacheElements();
      // Call the function generateUI
      this.generateUI();
    },
    cacheElements() {
      console.log("2. Chache the elements!");
      this.$concertsListDanceHall = document.querySelector(
        ".stage--dancehall .lineup-stage__list"
      );
      this.$concertDetails = document.querySelector(".concert__details");
    },
    generateUI() {
      console.log("3. Generate User Interface!");
      this.$concertsListDanceHall.innerHTML =
        this.generateHtmlForConcerts(concerts);
      // Add listeners to all listitems under de unordered list with class name .concerts__list
      const $concerts =
        this.$concertsListDanceHall.querySelectorAll(".concert");
      $concerts.forEach(($elem) => {
        $elem.addEventListener("click", (ev) => {
          const elem = ev.currentTarget;
          const id = elem.dataset.id;
          //Get concert where id is equal to this id
          const concert = concerts.find((concert) => concert.id === id);
          this.$concertDetails.innerHTML =
            this.generateHtmlForConcertDetails(concert);
        });
      });
    },
    generateHtmlForConcerts(concerts) {
      let tmpStr = "";
      tmpStr += concerts
        .map(
          (concert) => `
        <li class="concert" data-id="${concert.id}">
          ${concert.bandName}
          <span>${this.getTimeFromCurrentTimeMillis(
            concert.from
          )} - ${this.getTimeFromCurrentTimeMillis(concert.to)}</span>
        </li>
      `
        )
        .join("");
      return tmpStr;
    },
    generateHtmlForConcertDetails(concert) {
      return `
      <header>
        <img src=${concert.thumbnail}>
      </header>
      <h3>${concert.bandName}</h3>
      <span>${this.getTimeFromCurrentTimeMillis(
        concert.from
      )} - ${this.getTimeFromCurrentTimeMillis(concert.to)}</span>
      <span>${concert.place}</span>
      <span>${concert.genre}</span>
      <p>${concert.biography}</p>
      `;
    },
    getTimeFromCurrentTimeMillis(millis) {
      const date = new Date(millis);
      return date.toTimeString().split(" ")[0].substring(0, 5);
    },
  };
  app.init();
})();
