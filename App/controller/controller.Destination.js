const {
  loadDestinations,
  addData,
  finData,
  delData,
  updateData,
} = require("../utils/destination.js");

// Untuk menampilkan Halaman Dashboard
const page_Dashboard = (req, res) => {
  res.render("./components/admin/dashboard.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./index.ejs",
  });
};

const page_Adddestination = (req, res) => {
  res.render("./components/admin/dashboard.ejs", {
    title: "Add Data Des",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./addData.ejs",
    header: "Add Data Destination",
  });
};

const add_Destination = (req, res) => {
  addData(req.body);
  const destinations = loadDestinations();
  res.render("./components/admin/dashboard.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./showAllData.ejs",
    destinations,
  });
};

const show_Destinations = (req, res) => {
  const destinations = loadDestinations();
  res.render("./components/admin/dashboard.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./showAllData.ejs",
    header: "All Data Destination",
    destinations,
  });
};

const detail_Destination = (req, res) => {
  const findData = finData(req.params.nama);
  res.render("./components/admin/dashboard.ejs", {
    title: "Detail",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./detail.ejs",
    findData,
  });
};

const page_Update = (req, res) => {
  res.render("./components/admin/dashboard.ejs", {
    title: "update",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./upData.ejs",
  });
};

const update_Destination = (req, res) => {
  updateData(req.body);
  const destinations = loadDestinations();
  res.render("./components/admin/dashboard.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./showAllData.ejs",
    destinations,
  });
};

const det_Destination = (req, res) => {
  delData(req.params.id);
  const destinations = loadDestinations();
  res.render("./components/admin/dashboard.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./showAllData.ejs",
    destinations,
  });
};
module.exports = {
  page_Dashboard,
  page_Adddestination,
  add_Destination,
  show_Destinations,
  detail_Destination,
  page_Update,
  update_Destination,
  det_Destination,
};
