const express = require("express"),
  route = express.Router();
const {
  load_Admin,
  add_Admin,
} = require("../controller/global_API/cont.API.Admin.js");

route.get("/api/admins", load_Admin);
route.post("/api/admins", add_Admin);
route.put("/api/admins/:id", () => {});
route.delete("/api/admins/:id", () => {});

route.post("/api/admins", () => {});
module.exports = { route };
