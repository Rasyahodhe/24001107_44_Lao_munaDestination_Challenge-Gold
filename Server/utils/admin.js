const fs = require("fs");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Make Admin.json in forlder Data
const dataPath = "./data/admin.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// Get All Data Admin.json
const loadAdmin = () => {
  const fileBuffer = fs.readFileSync("data/admin.json");
  const admins = JSON.parse(fileBuffer);
  return admins;
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
};
