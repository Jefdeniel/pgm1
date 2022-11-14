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

/* PROJECTS */

/* EVENTS */

const events = [
  {
    title:
      "Interactieve workshops voor leerlingen laatste graad secundair onderwijs",
    link: "https://www.arteveldehogeschool.be/dienstverlening/diensten-voor-scholen/winterlab",
  },
  {
    title: `Workshops "Zeg het met 3D, Code, Kleur, Beeld en geluid"`,
    link: "https://ahsdevelopers.github.io/zeghetmetkleur/",
  },
  {
    title:
      "Studie-informatiedagen (SID-ins): aanbod aan studie- en beroepsmogelijkheden na je secundair onderwijs",
    link: "https://www.arteveldehogeschool.be/bij-ons-studeren/kom-kennismaken/sid-ins",
  },
  {
    title: "Infodag zaterdag 11 maart 2023 (10:00 tot 17:00)",
    link: "https://www.arteveldehogeschool.be/bij-ons-studeren/kom-kennismaken/infodagen",
  },
];

const $events = document.querySelector(".intro");
$events.append(events.map((e) => e.title).join(" - "));

/* PROJECTS */

const projects = [
  {
    id: "6e819ef2-30fb-4f6d-80ec-9aa3d83d712f",
    title: "Dialectische Gedragstherapie (DGT)",
    synopsis: "Webapp ter ondersteuning van Dialectische Gedragstherapie (DGT)",
    author: {
      firstName: "Charlotte",
      lastName: "Delvaux",
    },
    technologies: [
      {
        id: 1,
        name: "foto Angular",
      },
      {
        id: 2,
        name: "foto NestJS",
      },
    ],
    screenshots: ["array van een string hier met foto's"],
  },
  {
    id: "643bc8da-08a3-4a6c-82ad-5c314768cfb5",
    title: "Buurtkajaks Gent",
    synopsis: "Native mobile applicatie om kajaks te reserveren in Gent",
    author: {
      firstName: "Dylan",
      lastName: "Cathelijn",
    },
    technologies: [
      {
        id: 3,
        name: "foto React Native",
      },
      {
        id: 4,
        name: "foto firebase",
      },
    ],
    screenshots: ["array van een string hier met foto's"],
  },
  {
    id: "d901a016-76bc-4625-a1c4-7d419627945c",
    title: "Tekst.ai",
    synopsis:
      "Een gebruiksvriendelijk en personaliseerbaar dashboard voor Tekst.ai",
    author: {
      firstName: "Jan",
      lastName: "Deschaft",
    },
    technologies: [
      {
        id: 2,
        name: "foto NextJS",
      },
      {
        id: 5,
        name: "foto Strapi",
      },
    ],
    screenshots: ["array van een string hier met foto's"],
  },
  {
    id: "c4f34e8f-adc9-4d3a-9aae-894b8e4ccb19",
    title: "Virtual Closed",
    synopsis:
      "Sociale applicatie om kleding (uit jouw kledingkast) te matchen tot een goede outfit door andere gebruikers",
    author: {
      firstName: "Thabisa",
      lastName: "Dingani",
    },
    technologies: [
      {
        id: 3,
        name: "foto React Native",
      },
      {
        id: 4,
        name: "foto firebase",
      },
    ],
    screenshots: ["array van een string hier met foto's"],
  },
  {
    id: "03ae957a-a73b-4a35-8ff1-83c3e4bcee25",
    title: "Car expense",
    synopsis:
      "Platform om kosten van een auto te bijhouden inclusief speech-to-text",
    author: {
      firstName: "Jamie-Lee",
      lastName: "Hart",
    },
    technologies: [
      {
        id: 9,
        name: "foto ReactJS",
      },
      {
        id: 6,
        name: "foto Supabase",
      },
    ],
    screenshots: ["array van een string hier met foto's"],
  },
  {
    id: "c2fe4e78-6167-4be3-a40b-fc91ca123b2a",
    title: "Crypto Tracker",
    synopsis: "Mobiele (native) applicatie voor het tracken van cryptomunten",
    author: {
      firstName: "Aiden",
      lastName: "Souffi",
    },
    technologies: [
      {
        id: 3,
        name: "foto React Native",
      },
      {
        id: 4,
        name: "foto Firebase",
      },
    ],
    screenshots: ["array van een string hier met foto's"],
  },
  {
    id: "14f230e8-46d2-4d3b-9318-47a83c95b3c8",
    title: "La Macarena",
    synopsis:
      "Website voor La Macarena, een organisatie die verschillende activeiten organiseert voor jonge vrouwen",
    author: {
      firstName: "Nicolas",
      lastName: "Cnudde",
    },
    technologies: [
      {
        id: 7,
        name: "foto VueJS",
      },
      {
        id: 8,
        name: "foto GraphQL",
      },
    ],
    screenshots: ["array van een string hier met foto's"],
  },
  {
    id: "3d8a578c-ef45-431d-a3df-12cdc36c8b79",
    title: "TorchLight",
    synopsis:
      "Mobiele applicatie om characters bij te houden tijdens een Dungeons and Dragons spel",
    author: {
      firstName: "Bram",
      lastName: "Vandenbussche",
    },
    technologies: [
      {
        id: 1,
        name: "foto Angular",
      },
      {
        id: 4,
        name: "foto Firebase",
      },
    ],
    screenshots: ["array van een string hier met foto's"],
  },
  {
    id: "27c22a24-4435-4182-8fa7-7ae6963182b8",
    title: "DiscoverSound",
    synopsis:
      "Webapplicatie waarbij je willekeurige nummers te horen krijgt van onbekende bands",
    author: {
      firstName: "Bram",
      lastName: "Criel",
    },
    technologies: [
      {
        id: 9,
        name: "foto ReactJS",
      },
      {
        id: 4,
        name: "foto Firebase",
      },
    ],
    screenshots: ["array van een string hier met foto's"],
  },
];

// console.log(projects);

const socials = [
  {
    id: "website",
    logo: "https://www.pngfind.com/pngs/m/433-4333068_website-icon-png-white-internet-transparent-png.png",
    link: "http://www.pgm.gent",
  },
  {
    id: "linkedin",
    logo: "https://pngset.com/images/linkedin-icon-white-text-logo-symbol-trademark-transparent-png-851740.png",
    link: "https://www.linkedin.com/company/28878545/admin/",
  },
  {
    id: "facebook",
    logo: "https://spng.pngfind.com/pngs/s/381-3815873_want-to-keep-up-to-date-on-whats.png",
    link: "https://www.facebook.com/Programmeren.ahs",
  },
  {
    id: "instagram",
    logo: "https://imgur.com/gallery/rVXsjia",
    link: "https://www.instagram.com/programmeren.ahs/",
  },
  {
    id: "youtube",
    logo: "https://imgur.com/gallery/geVBVwg",
    link: "https://www.youtube.com/channel/UCHly8VZULSMWEmvbPJNVtFA",
  },
];

const $socials = document.querySelector(".socials");
$socials.append(socials.map((e) => e.logo).join(""));

// console.log(socials);
