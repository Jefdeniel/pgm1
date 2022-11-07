const $c = document.querySelector(".container"); // $c is een DOM element

let str = "";
for (let i = 0; i <= 100; i++) {
  str += `<div style="transform:rotate(${
    360 / i
  }deg)"><h1>Hoofdstuk ${i}</h1><p>WAAROM WERKT DIT NIET</p></div>`;
}
$c.innerHTML = str;
