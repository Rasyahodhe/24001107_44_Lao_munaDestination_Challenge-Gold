const fs = require("fs");

// Make Folder Data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Make Destination.json in Folder Data
const dataPath = "./data/destinations.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// Get All Data Destination.json
const loadDestinations = () => {
  const fileBuffer = fs.readFileSync("data/destinations.json", "utf-8");
  const destinations = JSON.parse(fileBuffer);
  return destinations;
};

module.exports = { loadDestinations };
