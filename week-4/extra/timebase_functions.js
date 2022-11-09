/* TIME BASED STUFF */

function sayHello() {
  console.log("hello");
}
sayHello();
// Bepaalde actie uitstellen voor bepaald aantal miliseconden
setTimeout(sayHello, 2000);

function saySomething(msg) {
  return `I will say ${msg}`;
}

setTimeout(
  (msg) => {
    const message = saySomething(msg);
    console.log(message);
  },
  2000,
  "i am your father"
);

// Code uitvoeren na een bepaalde interval
//setInterval(sayHello, 2);
// setInterval((msg) => {
//   const message = saySomething(msg);
//   console.log(message);
// }, 1000);

// Make a ticket

let seconds = 0;
setInterval(() => {
  console.log(`${seconds}s`);
  seconds++;
}, 1);
