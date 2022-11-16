function bmi(strings, name, weight, height) {
  const bmi = (weight / (height * height)).toFixed(1);
  let condition = "healthy weight";
  if (bmi < 18.5) {
    condition = "underweight";
  } else if (bmi >= 18.5 && bmi <= 25) {
    condition = "healthy weight";
  } else if (bmi > 25 && bmi <= 30) {
    condition = "overweight";
  } else if (bmi > 30) {
    condition = "obesity";
  }
  return strings[0] + name + strings[1] + bmi + "\nCondition: " + condition;
}
const name = "Philippe";
const weight = 165;
const height = 1.72;
const msg5 = bmi`The person ${name} has a bmi of ${weight}${height}`;
console.log(msg5);
