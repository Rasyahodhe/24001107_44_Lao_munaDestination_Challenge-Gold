const express = require("express");
const route_Log = express.Router();

const {
  page_Login,
  getData_Login,
} = require("../controller/controller.Login.js");

// ====================================================Setting Login
route_Log.get("/", page_Login).post("/", getData_Login);

module.exports = { route_Log };
