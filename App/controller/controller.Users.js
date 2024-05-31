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

const us_profileUpdate = async (req, res) => {
  const { name } = req.params;
  const user = await usersRepository.getuserByusername(name);
  res.render("./components/users/all_Comp.ejs", {
    title: "From Update",
    layout: "./layouts/main_Lay_Client.ejs",
    menu: "./html/com_formUpdateUser.ejs",
    name: name,
    user,
  });
};

const us_proccesUpdate = async (req, res) => {
  const { id } = req.params;
  const {
    nameuser,
    usernameuser,
    phoneuser,
    emailuser,
    passuser,
    confirmpass,
  } = req.body;

  const data = {
    name: nameuser,
    email: emailuser,
    phone: phoneuser,
    username: usernameuser,
    password: passuser,
    confirm_password: confirmpass,
  };
  await usersRepository.updateUser(data, id);
  return res.json({
    message: "Data Berhasil di update kembali ke Login",
  });
};

const us_delUser = async (req, res) => {
  const { name } = req.params;
  await usersRepository.delUserByUsername(name);
  res.json({
    message: "Data Berhasil dihapus",
  });
};

module.exports = {
  us_Dash,
  us_Des,
  us_Des_detail,
  us_About,
  us_Des_Search,
  us_profile,
  us_profileUpdate,
  us_proccesUpdate,
  us_delUser,
};
