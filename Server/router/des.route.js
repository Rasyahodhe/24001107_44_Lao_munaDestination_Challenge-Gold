const express = require("express");
const route_d = express.Router();

const {
  page_Dashboard,
  page_Adddestination,
  add_Destination,
  show_Destinations,
  detail_Destination,
  page_Update,
  update_Destination,
  det_Destination,
} = require("../controller/controller.Destination.js");

//=====================================================Setting Dashboar
route_d.get("/dashboard", page_Dashboard);

//=================================================== Setting Halaman ADD DATA
// For get Page Add Data
route_d
  .get("/dashboard/adddata", page_Adddestination)
  .post("/dashboard/adddata", add_Destination);

//=================================================== Setting Halaman SHOW ALL DATA
// For get page ShowAllData
route_d.get("/dashboard/showalldata", show_Destinations);

// API untuk menangkap Detail
route_d.get("/dashboard/showalldata/detail/:nama", detail_Destination);

// //=================================================== Setting Halaman UPDATE DATA
// API untuk mengupdate Salah satu item
route_d
  .get("/dashboard/showalldata/updata:/id", page_Update)
  .put("/dashboard/showalldata/updata/:id", update_Destination);

//Router Untuk menghapus salah satu item
route_d.delete("/dashboard/showalldata/deldata/:id", det_Destination);

module.exports = { route_d };
