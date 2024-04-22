const express = require("express"),
  routerAdmin = express.Router();
const { body, validationResult, check, header } = require("express-validator");
const {
  loadDestinations,
  addData,
  finData,
  delData,
  updateData,
} = require("../utils/destination.js");

// ====================================================Setting Login
routerAdmin.get("/", (req, res) => {
  res.render("./components/admin/login.ejs", {
    title: "Login Admin",
    layout: "./layouts/main_login.ejs",
  });
});
routerAdmin.post("/", (req, res) => {
  const username = req.body.username;
  const pass = req.body.password;
  if (username === "rasyah" && pass === "123") {
    res.redirect("/dashboard");
  }
});

//=====================================================Setting Dashboar
routerAdmin.get("/dashboard", (req, res) => [
  res.render("./components/admin/dashboard.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./index.ejs",
  }),
]);

//=================================================== Setting Halaman ADD DATA
// For get Page Add Data
routerAdmin
  .get("/dashboard/adddata", (req, res) => {
    res.render("./components/admin/dashboard.ejs", {
      title: "Add Data Des",
      layout: "./layouts/main_Layouts_admin.ejs",
      menu: "./addData.ejs",
      header: "Add Data Destination",
    });
  })
  .post("/dashboard/adddata", (req, res) => {
    addData(req.body);
    const destinations = loadDestinations();
    res.render("./components/admin/dashboard.ejs", {
      title: "Dashboard",
      layout: "./layouts/main_Layouts_admin.ejs",
      menu: "./showAllData.ejs",
      destinations,
    });
  });

//=================================================== Setting Halaman SHOW ALL DATA
// For get page ShowAllData
routerAdmin.get("/dashboard/showalldata", (req, res) => {
  const destinations = loadDestinations();
  res.render("./components/admin/dashboard.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./showAllData.ejs",
    header: "All Data Destination",
    destinations,
  });
});

// API untuk menangkap Detail
routerAdmin.get("/dashboard/showalldata/detail/:nama", (req, res) => {
  const findData = finData(req.params.nama);
  res.render("./components/admin/dashboard.ejs", {
    title: "Detail",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./detail.ejs",
    findData,
  });
});

// //=================================================== Setting Halaman UPDATE DATA
// API untuk mengupdate Salah satu item
routerAdmin
  .get("/dashboard/showalldata/updata:/id", (req, res) => {
    res.render("./components/admin/dashboard.ejs", {
      title: "update",
      layout: "./layouts/main_Layouts_admin.ejs",
      menu: "./upData.ejs",
    });
  })
  .put("/dashboard/showalldata/updata/:id", (req, res) => {
    updateData(req.body);
    const destinations = loadDestinations();
    res.render("./components/admin/dashboard.ejs", {
      title: "Dashboard",
      layout: "./layouts/main_Layouts_admin.ejs",
      menu: "./showAllData.ejs",
      destinations,
    });
  });

//Router Untuk menghapus salah satu item
routerAdmin.delete("/dashboard/showalldata/deldata/:id", (req, res) => {
  delData(req.params.id);
  const destinations = loadDestinations();
  res.render("./components/admin/dashboard.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./showAllData.ejs",
    destinations,
  });
});

//======================================Setting Halaman Add Admin==========
routerAdmin.get("/dashboard/regisadmin", (req, res) => {
  res.render("./components/admin/dashboard.ejs", {
    title: "Add Admin",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./addAdmin.ejs",
    header: "regis Admin",
  });
});

module.exports = { routerAdmin };
