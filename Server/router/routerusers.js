const express = require("express"),
  routeruser = express.Router();
const { loadDestinations } = require("../utils/destination");

// Page index
routeruser.get("/", (req, res) => {
  const destinations = loadDestinations();
  res.render("./components/users/index.ejs", {
    title: "Home",
    layout: "./layouts/main_Layouts_user.ejs",
    destinations,
  });
});

// Page about
routeruser.get("/about", (req, res) => {
  res.render("./components/users/about.ejs", {
    title: "About",
    layout: "./layouts/main_Layouts_user.ejs",
  });
});

//page details
routeruser.get("/details", (req, res) => {
  res.render("./components/users/detail.ejs", {
    title: "Details Page",
    layout: "./layouts/main_Layouts_user.ejs",
  });
});

routeruser.get("/destination", (req, res) => {
  res.render("./components/users/destination.ejs", {
    title: "Destination Page",
    layout: "./layouts/main_layouts_user.ejs",
  });
});
module.exports = { routeruser };
