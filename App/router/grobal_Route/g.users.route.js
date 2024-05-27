const express = require("express");
const r_global_us = express.Router();
const {
  api_Users,
  api_UserById,
  api_addUser,
  api_updateUser,
  api_delUser,
  
} = require("../../controller/global_API/cont.API.Users");

r_global_us
  .get("/api/users", api_Users)
  .post("/api/users", api_addUser)
  .put("/api/users/:id", api_updateUser)
  .delete("/api/users/:id", api_delUser);

r_global_us.get("/api/users/:id", api_UserById);

module.exports = { r_global_us };
