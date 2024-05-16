const express = require("express");
const r_global_us = express.Router();
const {
  api_Users,
  api_AddUser,
  api_Upuser,
  api_Deluser,
} = require("../../controller/global_API/cont.API.Users");

r_global_us
  .get("/api/users", api_Users)
  .post("/api/users", api_AddUser)
  .put("/api/users/id", api_Upuser)
  .delete("/api/users", api_Deluser);

module.exports = { r_global_us };
