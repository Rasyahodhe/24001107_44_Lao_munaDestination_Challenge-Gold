const fs = require("fs");

// Make Folder Data
const dirPath = "./repository/repo_Global/data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Make Destination.json in Folder Data
const dataPath = "./repository/repo_Global/data/destinations.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// Get All Data Destination.json
const loadDestinations = () => {
  const fileBuffer = fs.readFileSync(
    "repository/repo_Global/data/destinations.json",
    "utf-8"
  );
  const destinations = JSON.parse(fileBuffer);
  return destinations;
};

// Proces Add data
// Function Save Data to JSON
const saveData = (destination) => {
  fs.writeFileSync(
    "repository/repo_Global/data/destinations.json",
    JSON.stringify(destination)
  );
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
  const getPosition = destinations.find((d) => {
    d.id === +id;
  });
  const indexDes= destinations.indexOf(getPosition);
  destinations.splice(indexDes, 1);
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

const findDataById = (id) => {
  const destinations = loadDestinations();
  const findDestination = destinations.find((d) => {
    return d.id === +id;
  });
  return findDestination;
};

module.exports = {
  loadDestinations,
  addData,
  finData,
  findDataById,
  delData,
  updateData,
};
