const db = require("../connector/db");

// const getUsername = async (username) => {
//   const user = await db("users")
//     .select("user_name")
//     .where({ user_name: username });
//   return user;
// };

// const getPassword = async (password) => {
//   const pass = await db("users")
//     .select("password")
//     .where({ password: password });
//   return pass;
// };

const getUser = async (username) => {
  const user = await db("users").select("*").where({ username: username });
  return user;
};
// module.exports = { getUsername, getPassword };
module.exports = { getUser };
