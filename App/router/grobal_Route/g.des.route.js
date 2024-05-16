const express = require("express");
const r_global_des = express.Router();

r_global_des
  .get("/api/clients", () => {})
  .post("/api/clients", () => {})
  .put("/api/clients/:id", () => {})
  .delete("/api/clients/:id", () => {});

module.exports = { r_global_des };
