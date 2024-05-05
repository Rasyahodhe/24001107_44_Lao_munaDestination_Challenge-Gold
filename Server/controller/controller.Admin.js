const {
  loadAdmin,
  addAdmin,
  updateAdmin,
  delAdmin,
} = require("../utils/admin");

// Untuk menampilkan form login
const page_Login = (req, res) => {
  res.render("./components/admin/login.ejs", {
    title: "Login Admin",
    layout: "./layouts/main_login.ejs",
  });
};

// Untuk mengambil inputan user saat login
const getData_Login = (req, res) => {
  const username = req.body.username;
  const pass = req.body.password;
  if (username === "rasyah" && pass === "123") {
    res.redirect("/dashboard");
  }
};

const page_reg = (req, res) => {
  res.render("./components/admin/dashboard.ejs", {
    title: "Add Admin",
    layout: "./layouts/main_Layouts_admin.ejs",
    menu: "./addAdmin.ejs",
    header: "regis Admin",
  });
};

module.exports = {
  page_Login,
  getData_Login,
  page_reg,
};
