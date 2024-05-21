const db = require("../connector/db");

const users = async () => {
  const users = await db("users").select("*");
  return users;
};

const getuserByid = async (id) => {
  const user = await db("users").select("*").where({ userid: id });
  return user;
};

const getuserByname = async (name) => {
  const user = await db("users").select("*").where({ name_user: name });
};

const addUser = async (data) => {
  const addUser = await db("users").insert(data, ["*"]);
};

const updateUser = async (data) => {
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
  getuserByname,
  addUser,
  updateUser,
  dellUser,
};
