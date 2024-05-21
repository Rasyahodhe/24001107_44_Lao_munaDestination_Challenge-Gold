const destinationsRepository = require("../repository/repository.destinations");

const us_Dash = (req, res) => {
  res.render("./components/users/all_Comp.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_Home.ejs",
  });
};

const us_Des = async (req, res) => {
  const destinations = await destinationsRepository.allDestination();
  res.render("./components/users/all_Comp.ejs", {
    title: "Destinations",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_Des.ejs",
    destinations,
  });
};

const us_Des_Search = async (req, res) => {
  const { name } = req.body;
  const destinations = await destinationsRepository.getDestinationByname(name);
  res.render("./components/users/all_Comp.ejs", {
    title: "Destinations",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_Des.ejs",
    destinations,
  });
};

const us_Des_detail = async (req, res) => {
  const { id } = req.params;
  const destination = await destinationsRepository.getDestinationByid(+id);
  res.render("./components/users/all_Comp.ejs", {
    title: "Detail",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/subDes/subDes_Detail.ejs",
    destination,
  });
};

const us_About = (req, res) => {
  res.render("./components/users/all_Comp.ejs", {
    title: "About",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_About.ejs",
  });
};

module.exports = { us_Dash, us_Des, us_Des_detail, us_About, us_Des_Search };
