const express = require("express");
const route_Log = express.Router();

const {
  page_Login,
  getData_Login,
  register_User,
} = require("../controller/controller.Login.js");

// ====================================================Setting Login
route_Log.get("/", page_Login).post("/", getData_Login);
route_Log.post("/regis", register_User);

module.exports = { route_Log };
