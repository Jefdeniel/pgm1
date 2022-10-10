const v = 230; //  (spanning uitgedrukt in volt) met als waarde een positief getal
const i = 2.85; //  (stroom uitgedrukt in ampere) met als waarde een positief getal
const t = 0.02; // (tijd uitgedrukt in seconden) met als waarde een positief getal
var r = v / i; //  (weerstandswaarde uitgedrukt in ohm) is gelijk aan v gedeeld door i
var p = v * i; // (vermogen uitgedrukt in watt) is gelijk aan v vermenigvuldigd met i
var f = 1 / t; // (frequentie uitgedrukt in hertz) is gelijk aan 1 gedeeld door t

const scheiding = "\n==================================\n";
const msg = "The resistance of the resistor: R = V / I =>";
console.log(
  scheiding,
  "Formula Electricity",
  scheiding,
  msg,
  "R =",
  v,
  "/",
  i,
  "=",
  r,
  "Ohm",
  scheiding
);
