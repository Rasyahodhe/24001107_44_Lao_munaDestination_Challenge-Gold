const { loadUsers, addUser, updateUser, delUser } = require("../utils/users");
const { loadDestinations, finData } = require("../utils/destination");

const us_Dash = (req, res) => {
  res.render("./components/users/all_Comp.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_Home.ejs",
  });
};

const us_Des = (req, res) => {
  const destinations = loadDestinations();
  res.render("./components/users/all_Comp.ejs", {
    title: "Destinations",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_Des.ejs",
    destinations,
  });
};

const us_Des_detail = (req, res) => {
  const destination = req.params.name;
  const detail_des = finData(destination);
  res.render("./components/users/all_Comp.ejs", {
    title: "Destinations",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/subDes/subDes_Detail.ejs",
    detail_des,
  });
};

const us_About = (req, res) => {
  res.render("./components/users/all_Comp.ejs", {
    title: "About",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_About.ejs",
  });
};

module.exports = { us_Dash, us_Des, us_Des_detail, us_About };
