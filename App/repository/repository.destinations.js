const db = require("../connector/db");

const allDestination = async () => {
  const alldes = await db("destinations").select("*");
  return alldes;
};

const getDestinationByid = async (id) => {
  const destinastion = await db("destinations")
    .select("*")
    .where({ destination_id: id });
  return destinastion;
};
const getDestinationByname = async (name) => {
  const destinastion = await db("destinations")
    .select("*")
    .where({ destination_name: name });
  return destinastion;
};

const addDestination = async (data) => {
  const destination = await db("destinations").insert(data, ["*"]);
  return destination;
};

const updateDestination = async (data) => {
  const destination = await db("destinations")
    .where({ id: destination_id })
    .update(data, ["*"]);
  return destination;
};

const deleteDestination = async (id) => {
  const destinaion = await db("destinations")
    .where(destination_id, [`${id}`])
    .del();
  return destinaion;
};
module.exports = {
  allDestination,
  getDestinationByid,
  getDestinationByname,
  addDestination,
  updateDestination,
  deleteDestination,
};
