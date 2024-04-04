const express = require("express"),
  routerAdmin = express.Router();

const {
  loadDestinations,
  addData,
  finData,
} = require("../utils/destination.js");

routerAdmin.get("/", (req, res) => {
  res.render("./components/admin/login.ejs", {
    title: "Login Admin",
    layout: "./layouts/main_login.ejs",
  });
});

routerAdmin.get("/dashboar", (req, res) => [
  res.render("./components/admin/dashboard.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./index.ejs",
  }),
]);

// Setting Add Data
// For get Page Add Data
routerAdmin.get("/adddata", (req, res) => {
  res.render("./components/admin/dashboard.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./addData.ejs",
  });
});
// For Add Data
routerAdmin.post("/adddata", (req, res) => {
  addData(req.body);
  const destination = loadDestinations();
  res.render("./components/admin/dashboard.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./showAllData.ejs",
    destination,
  });
});

// For get page ShowAllData
routerAdmin.get("/showAllData", (req, res) => {
  const destination = loadDestinations();
  res.render("./components/admin/dashboard.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./showAllData.ejs",
    destination,
  });
});

// API untuk mengupdate Salah satu item
routerAdmin.get("/updata", (req, res) => {
  res.render("./components/admin/dashboard.ejs", {
    title: "update",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./upData.ejs",
  });
});

// API untuk menangkap Detail
routerAdmin.get("/:nama", (req, res) => {
  const findData = finData(req.params.nama);
  res.render("./components/admin/dashboard.ejs", {
    title: "Detail",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./detail.ejs",
    findData,
  });
});

module.exports = { routerAdmin };
