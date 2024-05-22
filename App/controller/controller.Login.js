const loginRepository = require("../repository/repository.login");

// Untuk menampilkan form login
const page_Login = (req, res) => {
  res.render("./components/login.ejs", {
    title: "Login Admin",
    layout: "./layouts/main_login.ejs",
  });
};

let passluar = "234";

// Untuk mengambil inputan user saat login
const getData_Login = async (req, res) => {
  const { username, password } = req.body;
  const getUser = await loginRepository.getUser(username);

  getUser.forEach((user) => {
    if (username === user.username && password === user.password) {
      // res.redirect("/us/dash");
      res.render("./components/users/all_Comp.ejs", {
        title: "Dashboard",
        layout: "./layouts/main_Lay_Client.ejs",
        menu: "./html/com_Home.ejs",
        name: user.username,
        user,
      });
    }
  });

  // getUser.forEach((user) => {
  //   res.json(user.user_name);
  // });
};

module.exports = {
  page_Login,
  getData_Login,
};
