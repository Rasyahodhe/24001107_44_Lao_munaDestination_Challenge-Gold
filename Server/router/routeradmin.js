const express = require("express"),
  routerAdmin = express.Router();

const { loadDestinations } = require("../utils/destination.js");

routerAdmin.get("/admin", (req, res) => {
  res.render("./components/admin/login.ejs", {
    title: "Login Admin",
    layout: "./layouts/admin/main_Layouts_admin.ejs",
  });
});

routerAdmin.get("/dashboard", (req, res) => {
  res.render("./components/admin/dashboard.ejs", {
    title: "Dashboard",
    layout: "./layouts/admin/main_Layouts_admin.ejs",
  });
});

// Setting Dalam Dashboard

routerAdmin.get("/adddata", (req, res) => {
  const destination = loadDestinations();
  res.render("./components/admin/addData.ejs", {
    title: "Add Data",
    layout: "./layouts/admin/main_Layouts_admin.ejs",
    destination,
  });
});

module.exports = { routerAdmin };
