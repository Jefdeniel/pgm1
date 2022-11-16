/* Spreek deze functie aan
Werkt deze functie nog als we het else statement verwijderen en de inhoud ervan na het if statement plaatsen?
Herschrijf de functie door if…else te vervangen door een ternary operator
Definieer een nieuwe functie min(a, b) die de kleinste waarde uit twee waarden teruggeeft(=retourneert). Roep deze functie een paar keer aan.
Definieer een nieuwe functie pow(x, n) die het getal x tot de macht n verheft en deze uitkomst retourneert. Roep deze functie een paar keer aan. */

function checkAge(age) {
  return age > 18 ? true : "Did your parents allow you?";
}

// aanspreken van de functie
const m = checkAge(20);
console.log(m);

// definieer een nieuwe functie min(a,b)

function min(a, b) {
  if (a > b) {
    return b;
  }
  return a;
}

let v = min(3, 6);
console.log(v);
v = min(6, 3);
console.log(v);
