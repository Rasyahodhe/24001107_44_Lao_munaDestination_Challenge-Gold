const destinationsRepository = require("../repository/repository.destinations");
const usersRepository = require("../repository/repository.users");
const us_Dash = (req, res) => {
  const { name } = req.params;
  res.render("./components/users/all_Comp.ejs", {
    title: "Dashboard",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_Home.ejs",
    name: name,
  });
};

const us_Des = async (req, res) => {
  const { name } = req.params;
  const destinations = await destinationsRepository.allDestinations();
  res.render("./components/users/all_Comp.ejs", {
    title: "Destinations",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_Des.ejs",
    destinations,
    name: name,
  });
};

const us_Des_Search = async (req, res) => {
  const { name } = req.params;
  const { namedes } = req.body;
  const destinations = await destinationsRepository.getDestinationByname(
    namedes
  );
  res.render("./components/users/all_Comp.ejs", {
    title: "Destinations",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_Des.ejs",
    destinations,
    name: name,
  });
};

const us_Des_detail = async (req, res) => {
  const { id, name } = req.params;
  const destination = await destinationsRepository.getDestinationByid(+id);
  res.render("./components/users/all_Comp.ejs", {
    title: "Detail",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/subDes/subDes_Detail.ejs",
    destination,
    name: name,
  });
};

const us_About = (req, res) => {
  const { name } = req.params;
  res.render("./components/users/all_Comp.ejs", {
    title: "About",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_About.ejs",
    name: name,
  });
};

const us_profile = async (req, res) => {
  const { name } = req.params;
  const user = await usersRepository.getuserByusername(name);
  res.render("./components/users/all_Comp.ejs", {
    title: "Profile",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_Profile.ejs",
    name: name,
    user,
  });
};

module.exports = {
  us_Dash,
  us_Des,
  us_Des_detail,
  us_About,
  us_Des_Search,
  us_profile,
};
