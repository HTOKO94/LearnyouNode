const fs = require("fs");
const nblines =
  fs.readFileSync(process.argv[2]).toString().split("\n").length - 1;
console.log(nblines);