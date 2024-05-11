// Untuk menampilkan form login
const page_Login = (req, res) => {
  res.render("./components/login.ejs", {
    title: "Login Admin",
    layout: "./layouts/main_login.ejs",
  });
};

// Untuk mengambil inputan user saat login
const getData_Login = (req, res) => {
  const username = req.body.username;
  const pass = req.body.password;
  if (username === "indra" && pass === "234") {
    res.redirect("/cl/dash");
  }
};

module.exports = {
  page_Login,
  getData_Login,
};
