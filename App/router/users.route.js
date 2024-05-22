const express = require("express");
const route_u = express.Router();

const {
  us_Dash,
  us_Des,
  us_Des_Search,
  us_About,
  us_Des_detail,
  us_profile,
} = require("../controller/controller.Users.js");

route_u.get("/:name/dash/", us_Dash);
route_u.get("/:name/des/", us_Des);
route_u.post("/:name/des/search", us_Des_Search);
route_u.get("/:name/about/", us_About);
route_u.get("/:name/des/detail/:id", us_Des_detail);
route_u.get("/:name/profile", us_profile);

module.exports = { route_u };
