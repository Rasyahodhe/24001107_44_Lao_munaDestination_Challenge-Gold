const fs = require("fs");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Make Admin.json in forlder Data
const dataPath = "./data/users.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// Get All Data Admin.json
const loadUsers = () => {
  const fileBuffer = fs.readFileSync("data/users.json");
  const users = JSON.parse(fileBuffer);
  return users;
};

const saveUser = (user) => {
  fs.writeFileSync("data/users.json", JSON.stringify(user));
};

// function for create or add new client
const addUser = (user) => {
  const users = loadUsers();
  users.push(user);
  saveUser(users);
};

const updateUser = (user) => {
  const users = loadUsers();
  const indexCl = users.indexOf(user);
  users[indexCl] = user;
  saveUser(users);
};

const delUser = (id) => {
  const users = loadUsers();
  users.splice(+id, 1);
  saveUser(users);
};

const searchUser = (user) => {
  const users = loadUsers();
  const index = users.indexOf(user);
  const getUser = users[index];
  return getUser;
};

module.exports = {
  loadUsers,
  searchUser,
  addUser,
  updateUser,
  delUser,
};
