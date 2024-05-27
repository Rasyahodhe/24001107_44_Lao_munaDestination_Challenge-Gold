const db = require("../config/db");

const users = async () => {
  const users = await db("users").select("*");
  return users;
};

const getuserByid = async (id) => {
  const user = await db("users").select("*").where({ userid: id });
  return user;
};

const getuserByusername = async (name) => {
  const user = await db("users").select("*").where({ username: name });
  return user;
};

const addUser = async (data) => {
  const addUser = await db("users").insert(data, ["*"]);
  return addUser;
};

const updateUser = async (data, id) => {
  const updateUser = await db("users")
    .where({ user_id: id })
    .update(data, ["*"]);
  return updateUser;
};

const dellUser = async (id) => {
  const delUser = await db("users").where({ user_id: id }).del();
  return delUser;
};

module.exports = {
  users,
  getuserByid,
  getuserByusername,
  addUser,
  updateUser,
  dellUser,
};
