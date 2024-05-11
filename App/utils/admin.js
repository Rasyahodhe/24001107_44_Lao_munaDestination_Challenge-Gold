const fs = require("fs");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Make Admin.json in forlder Data
const dataPath = "./data/admins.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// Get All Data Admin.json
const loadAdmin = () => {
  const fileBuffer = fs.readFileSync("data/admins.json");
  const admins = JSON.parse(fileBuffer);
  return admins;
};

const saveAdmin = (admin) => {
  fs.writeFileSync("data/admins.json", JSON.stringify(admin));
};

// function for create or add new admin
const addAdmin = (admin) => {
  const admins = loadAdmin();
  admins.push(admin);
  saveAdmin(admins);
};

const updateAdmin = (admin) => {
  const admins = loadAdmin();
  const indexAd = admins.indexOf(admin);
  admins[indexAd] = admin;
  saveAdmin(admins);
};

const delAdmin = (id) => {
  const admins = loadAdmin();
  admins.splice(+id, 1);
  saveAdmin(admins);
};

const searcAdmin = (admin) => {
  const admins = loadAdmin();
  const index = admins.indexOf(admin);
  const getAdmin = admins[index];
  return getAdmin;
};

module.exports = {
  loadAdmin,
  searcAdmin,
  addAdmin,
  updateAdmin,
  delAdmin,
};
