const db = require("../config/db");

const allDestinations = async () => {
  const alldes = await db("destinations").select("*");
  return alldes;
};

const getDestinationByid = async (id) => {
  const destinastion = await db("destinations")
    .select("*")
    .where({ destination_id: id });
  return destinastion;
};
const getDestinationByname = async (namedes) => {
  const destinastion = await db("destinations")
    .select("*")
    .whereLike("destination_name", `%${namedes}%`);
  return destinastion;
};

const getDestinationByType = async (type) => {
  const destination = await db("destinations")
    .select("*")
    .where({ type: type });
  return destination;
};

const addDestination = async (data) => {
  const destination = await db("destinations").insert(data, ["*"]);
  return destination;
};

const updateDestination = async (data, id) => {
  const destination = await db("destinations")
    .where({ destination_id: +id })
    .update(data, ["*"]);
  return destination;
};

const deleteDestination = async (id) => {
  // const destinaion = await db("destinations")
  //   .where(destination_id, [`${id}`])
  //   .del();
  const destinaion = await db("destinations")
    .where({ destination_id: id })
    .del();
  return destinaion;
};
module.exports = {
  allDestinations,
  getDestinationByid,
  getDestinationByname,
  getDestinationByType,
  addDestination,
  updateDestination,
  deleteDestination,
};
