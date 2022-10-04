const firstName = "Jef";
const surName = "De Niel";
const sex = "Male";
const age = 22;
let married = false;
const avatar = "\u2665";
const quote = "Ik wil dood hehe";
const scheiding = "--------------------\n";
const groteScheiding = "_____________\n";
const Dutch = "*****";
const English = "****";
const French = "***";

console.log(typeof surName);

const msg = "firstName" + firstName + "surName" + surName + "avatar" + avatar;

console.log("My personal Curriculum Vit`\n", scheiding, msg);

console.log(
  scheiding,
  "firstName\n",
  "surName\n",
  "sex\n",
  "married\n",
  "quote\n",
  groteScheiding,
  "languages\n",
  groteScheiding,
  "Dutch\n",
  "English\n",
  "French\n"
);
