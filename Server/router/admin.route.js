const express = require("express"),
  route = express.Router();
const { body, validationResult, check, header } = require("express-validator");

const {
  page_Login,
  getData_Login,
  page_reg,
} = require("../controller/controller.Admin.js");

// ====================================================Setting Login
route.get("/", page_Login);
route.post("/", getData_Login);

//======================================Setting Halaman Add Admin==========
route.get("/dashboard/regisadmin", page_reg);

module.exports = { route };
