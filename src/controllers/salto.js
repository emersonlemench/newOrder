const fs = require("fs");
const path = require("path");
const cron = require("node-cron");

const baseJson = fs.readFileSync(path.resolve(__dirname, "../data/base.json"));

var convert = JSON.parse(baseJson);
var ultimo = convert.pop().orden;
convert.push(ultimo.orden);

var centena = Math.ceil(ultimo / 100) * 100;

var centena2 = Math.ceil(ultimo / 100) * 100 - 1;

var dosNum = ultimo.toString().slice(-2);

if (dosNum == "00") {
  convert.push({ orden: centena });
} else {
  convert.push({ orden: centena2 });
}

var newData = JSON.stringify(convert);

function calendario() {
  cron.schedule("* * * 1 * *", () => {
    fs.writeFileSync(path.join(__dirname, "../data/base.json"), newData);
  });
}

console.log(ultimo);

module.exports = calendario;
