const {
  loadClients,
  addClient,
  updateClient,
  delClient,
} = require("../utils/client");

const cl_Dash = (req, res) => {
  res.render("./components/client/all_Comp.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_Home.ejs",
  });
};

const cl_Des = (req, res) => {
  res.render("./components/client/all_Comp.ejs", {
    title: "Destinations",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_Des.ejs",
  });
};

module.exports = { cl_Dash, cl_Des };
