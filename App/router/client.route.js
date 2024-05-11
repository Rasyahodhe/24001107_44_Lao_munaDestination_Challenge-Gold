const express = require("express");
const route_c = express.Router();

const { cl_Dash, cl_Des } = require("../controller/controller.Client.js");

route_c.get("/cl/dash", cl_Dash);
route_c.get("/cl/des", cl_Des);

module.exports = { route_c };
