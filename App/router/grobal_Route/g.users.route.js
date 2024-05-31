const express = require("express");
const r_global_us = express.Router();
const {
  api_Users,
  api_UserById,
  api_UserByname,
  api_UserByusername,
  api_addUser,
  api_updateUser,
  api_delUser,
  api_delByusername
} = require("../../controller/global_API/cont.API.Users");

r_global_us
  .get("/api/users", api_Users)
  .get("/api/users/:id", api_UserById)
  .get("/api/users/name/:name", api_UserByname)
  .get("/api/users/username/:username", api_UserByusername)
  .post("/api/users", api_addUser)
  .put("/api/users/:id", api_updateUser)
  .delete("/api/users/:id", api_delUser)
  .delete("/api/users/username/:username", api_delByusername);

module.exports = { r_global_us };
