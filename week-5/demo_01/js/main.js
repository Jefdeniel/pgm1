// Select the first container by selector

const $container = document.querySelector(".container");
console.log($container);

const $row = $container.querySelector("p");
console.log($row);

let $p = $row.querySelector("p");
console.log($p);

$p = document.querySelector(".container > .row > .col-12 p");
console.log($p);

// Get the header

let $header = document.getElementById("header");
console.log($header);
$header = document.querySelector("#header");
console.log($header);

const $divs = document.getElementsByTagName("div");
console.log($divs);

const $osLis = document.querySelectorAll("os > li");
console.log($osLis);
console.log($osLis.length);
$osLis.forEach((elem) => {
  //console.log($elem);
  const txt = $elem.innerTxt;
  $elem.innerTxt = "OS"+ ${txt}
});
