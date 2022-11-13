const socials = [
  {
    id: "Facebook",
    logo: "",
    link: "",
  },
  {
    id: "Instragram",
    logo: "",
    link: "",
  },
  {
    id: "Youtube",
    logo: "",
    link: "",
  },
];

console.log(socials);

const $firstHeader = document.querySelector(".header").textContent;
// Place text for header into the div
console.log(this.$firstHeader);

let divMenu = document.getElementById(".header");
// element <ul> maken en toevoegen aan de div menu
var ulMenu = document.createElement("ul");
ulMenu.setAttribute("id", "nav");
var liItem = document.createElement("li");
liItem.setAttribute("class", "current");

ulMenu.appendChild(liItem);

var href = document.createElement("a");
href.setAttribute("href", "/sytematic_inventory/views/administrador/index.jsp");

liItem.appendChild(href);

href.appendChild(document.createTextNode("Inicio"));
// Ditto for the other liItem
document.getElementById("menu").appendChild(ulMenu);

const projects = [
  {
    id: "6e819ef2-30fb-4f6d-80ec-9aa3d83d712f",
    title: "Dialectische Gedragstherapie (DGT)",
    synopsis: "",
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
    synopsis: "",
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
    synopsis: "",
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
    synopsis: "",
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
    synopsis: "",
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
    synopsis: "",
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
    synopsis: "",
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
    synopsis: "",
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
    synopsis: "",
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

console.log(projects);
