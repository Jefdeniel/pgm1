function toDigits(pt, n) {
  pt = String(pt);
  while (pt.length < n) {
    pt = "0" + pt;
  }
  return pt;
}

function getTime() {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  return `${toDigits(h, 2)}:${toDigits(m, 2)}:${toDigits(s, 2)}`;
}

let time = getTime();
console.log(time);

const generateGrid = (nRows, nCols, ch = "*") => {
  let str = "";
  for (let r = 0; r < nRows; r++) {
    str += "* ";
    for (let c = 0; c < nCols; c++) {
      str += `${ch} `;
    }
    str += "\n";
  }
  return str;
};
console.log(generateGrid(6, 8, "#"));

const daysOfWeek = [
  "zondag",
  "maandag",
  "dindag",
  "woensdag",
  "donderdag",
  "vrijdag",
  "zaterdag",
];

const getDayOfWeek = () => {
  const date = new Date();
  const d = da;
};
