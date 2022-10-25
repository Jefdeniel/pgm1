// variabes 

let btn = document.querySelector("new-quote")
let quote = document.querySelector(".quote")
let person =  document.querySelector(".person")

const quotes = [(
  quote: "Hier komt de eerste quote",
  person: "Abraham Lincoln"
), {

  quote: "zebbie",
  person: "Thomas"

},];

btn.addEventListener("click", function(){

  let random = math.floor(math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})
