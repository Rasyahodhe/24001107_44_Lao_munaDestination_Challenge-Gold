const fs = require("fs");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Make Admin.json in forlder Data
const dataPath = "./data/clients.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// Get All Data Admin.json
const loadClients = () => {
  const fileBuffer = fs.readFileSync("data/clients.json");
  const clients = JSON.parse(fileBuffer);
  return clients;
};

const saveClient = (client) => {
  fs.writeFileSync("data/clients.json", JSON.stringify(client));
};

// function for create or add new client
const addClient = (client) => {
  const clients = loadClients();
  clients.push(client);
  saveAdmin(clients);
};

const updateClient = (client) => {
  const clients = loadClients();
  const indexCl = clients.indexOf(client);
  clients[indexCl] = client;
  saveClient(clients);
};

const delClient = (id) => {
  const clients = loadClients();
  clients.splice(+id, 1);
  saveClient(clients);
};

const searcClient = (client) => {
  const clients = loadClients();
  const index = clients.indexOf(client);
  const getClient = clients[index];
  return getClient;
};

module.exports = {
  loadClients,
  searcClient,
  addClient,
  updateClient,
  delClient,
};
