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
route_d.get("/ad/dash", page_Dashboard);

//=================================================== Setting Halaman ADD DATA
// For get Page Add Data
route_d
  .get("/ad/dash/add", page_Adddestination)
  .post("ad/dash/add", add_Destination);

//=================================================== Setting Halaman SHOW ALL DATA
// For get page ShowAllData
route_d.get("/ad/dash/destinations", show_Destinations);

// API untuk menangkap Detail
route_d.get("/ad/dash/destinations/det/:nama", detail_Destination);

// //=================================================== Setting Halaman UPDATE DATA
// API untuk mengupdate Salah satu item
route_d
  .get("/ad/dash/destinations/updata:/id", page_Update)
  .put("/ad/dash/destinations/updata/:id", update_Destination);

//Router Untuk menghapus salah satu item
route_d.delete("/ad/dash/destinations/del/:id", det_Destination);

module.exports = { route_d };
