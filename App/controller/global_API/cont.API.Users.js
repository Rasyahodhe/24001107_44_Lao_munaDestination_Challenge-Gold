const {
  loadUsers,
  addUser,
  updateUser,
  delUser,
} = require("../../utils/users");

const api_Users = (req, res) => {
  const users = loadUsers();
  return res.json(users);
};

const api_AddUser = (req, res) => {
  addUser(req.body);
  const users = loadUsers();
  return res.json(users);
};

const api_Upuser = (req, res) => {
  updateUser(req.body.name);
  const users = loadUsers();
  return res.json(users);
};

const api_Deluser = (req, res) => {
  const { id } = req.body;
  delUser(id);
  const users = loadUsers();
  return res.json(users);
};

module.exports = { api_Users, api_AddUser, api_Upuser, api_Deluser };
