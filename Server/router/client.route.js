const express = require("express");
const route_c = express.Router();

const { cl_Dash } = require("../controller/controller.Client.js");

route_c.get("/cl/dash", cl_Dash);

module.exports = { route_c };
