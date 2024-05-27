const db = require("./db");

const alldata = db("destinations").select("*");

console.log(alldata);
