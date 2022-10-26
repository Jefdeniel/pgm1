// const lineupElement = document.getElementById("lineup");

// console.log(lineupElement);

// const pElements = document.getElementsByTagName("p");
// for (let i = 0; i < pElements.length; i++) {
//   console.log(pElements.item(i).innerText);
// }

// const cElements = document.getElementsByClassName("bit");
// for (let i = 0; i < cElements.length; i++) {
//   console.log(cElements.item(i));
// }

// Kijken of er in de klasse articles effectief artikelen aanwezig zijn, zo niet: andere log

// const articleElement = document.querySelectorAll("#articles .article");
// if (articleElement !== null) {
//   console.log(articleElement);
// } else {
//   console.log("no article found");
// }

// ALLES MET HTML BIJ IN CONSOLE GENEREN MET DIE SPECIFIEKE KLASSE //

// const articleElement = document.querySelectorAll("#articles .article");
// if (articleElement.length > 0) {
//   articleElement.forEach((element) => {
//     console.log(element);
//   });
// } else {
//   console.log("no elements found");
// }

const lineupElement = document.getElementById("lineup");
lineupElement.innertHTML += `
    <article class="concert">
        <h1>Concert 1</h1>
    </article>
`;
