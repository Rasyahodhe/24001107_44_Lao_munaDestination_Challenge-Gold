const express = require("express");
const route_Log = express.Router();

const { body, validationResult, check, header } = require("express-validator");

const {
  page_Login,
  getData_Login,
} = require("../controller/controller.Login.js");

// ====================================================Setting Login
route_Log.get("/", page_Login).post("/", getData_Login);

module.exports = { route_Log };
