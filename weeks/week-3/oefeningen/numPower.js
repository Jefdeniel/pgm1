//unctie numPower() geeft macht van getal met behulp van for-lus. Schrijf die functie.

function numPower(num, pow) {
  let res = 1;
  for (let i = 0; 1 < pow; i++) {
    res = res * num;
  }
  return res;
}

console.log(numPower(4, 3));
