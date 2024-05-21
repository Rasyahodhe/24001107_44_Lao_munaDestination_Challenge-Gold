const express = require("express");
const r_global_des = express.Router();
r_global_des
  .get("/api/destinations", () => {})
  .post("/api/destinations", () => {})
  .put("/api/destinations/:id", () => {})
  .delete("/api/destinations/:id", () => {});

module.exports = { r_global_des };
