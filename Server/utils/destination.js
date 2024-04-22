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

// Proces Add data
// Function Save Data to JSON
const saveData = (destination) => {
  fs.writeFileSync("data/destinations.json", JSON.stringify(destination));
};
// function for to Add Data
const addData = (destination) => {
  const destinations = loadDestinations();
  destinations.push(destination);
  saveData(destinations);
};

//function Update item
const updateData = (destination) => {
  const destinations = loadDestinations();
  const indexdes = destinations.indexOf(destination);
  destinations[indexdes] = destination;
  saveData(destinations);
};

// function Delete item
const delData = (id) => {
  const destinations = loadDestinations();
  destinations.splice(+id, 1);
  saveData(destinations);
};

// function Seacrh item

const finData = (destination) => {
  const destinations = loadDestinations();
  const finddestination = destinations.find((des) => {
    des.nameDes === destination;
  });
  return finddestination;
};

module.exports = { loadDestinations, addData, finData, delData, updateData };
