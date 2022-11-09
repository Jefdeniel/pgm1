console.log("Hello world");

console.log(document);
const title = document.title;
console.log(title);
document.title = "my portfolio website";

const $container = document.querySelector(".container");
console.log($container);
const txt = $container.innerText;
console.log(txt);
$container.innerText = "www";

function tick() {
  const date = new Date();
  const timeStr = date.toTimeString().split(" ")[0];
  $container.innerText = timeStr;
  $container.style.transform = `rotate(${date.getSeconds() * 6})`;
}

setInterval(() => {
  tick();
}, 500);
