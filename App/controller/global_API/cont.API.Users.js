const repositoryUsers = require("../../repository/repository.users");
const repositoryUserJSON = require("../../repository/repo_Global/repo.g.users");

const api_Users = async (req, res) => {
  const users = await repositoryUsers.users();
  return res.json({
    data: users,
  });
};

const api_UserById = async (req, res) => {
  const { id } = req.params;
  const user = await repositoryUsers.getuserByid(id);
  return res.json({
    data: user,
  });
};

const api_addUser = async (req, res) => {
  const { name, email, phone, username, password, confirm_password } = req.body;
  const users = await repositoryUsers.users();
  const nameUsername = users.find((u) => {
    return u.username === username;
  });
  const phoneUser = users.find((u) => {
    return u.phone === phone;
  });
  const emailUser = users.find((u) => {
    return u.email === email;
  });

  if (nameUsername) {
    return res.json({
      message: "username user already have",
    });
  } else if (phoneUser) {
    return res.json({
      message: "phone user already have",
    });
  } else if (emailUser) {
    return res.json({
      message: "email user already have",
    });
  } else {
    const data = {
      name: name,
      email: email,
      phone: phone,
      username: username,
      password: password,
      confirm_password: confirm_password,
    };
    await repositoryUsers.addUser(data);
    const users = await repositoryUsers.users();
    return res.json({
      data: users,
    });
  }
};

const api_updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, username, password, confirm_password } = req.body;

  const data = {
    name: name,
    email: email,
    phone: phone,
    username: username,
    password: password,
    confirm_password: confirm_password,
  };
  await repositoryUsers.updateUser(data, id);
  const users = await repositoryUsers.users();
  return res.json({
    data: users,
  });
};

const api_delUser = async (req, res) => {
  const { id } = req.params;
  await repositoryUsers.dellUser(id);
  const users = await repositoryUsers.users();
  return res.json({
    data: users,
  });
};

// From JSON
const api_Users2 = (req, res) => {
  const users = repositoryUserJSON.loadUsers();
  res.json(users);
};

const api_UserById2 = (req, res) => {
  const { id } = req.params;
  const user = repositoryUserJSON.finData(id);
  res.json(user);
};
const api_UserByName2 = (req, res) => {
  const { name } = req.params;
  const user = repositoryUserJSON.findData(name);
  res.json({
    data: user,
  });
};

const api_addUser2 = (req, res) => {
  const { name, email, phone, username, password, confirm_password } = req.body;
  const users = repositoryUserJSON.loadUsers();
  const lengthUser = users.length;
  const nameUser = users.find((u) => {
    return u.name === name;
  });

  if (nameUser) {
    return res.json({
      message: "data Telah ada",
    });
  } else {
    const data = {
      id: lengthUser + 1,
      name: name,
      email: email,
      phone: phone,
      username: username,
      password: password,
      confirm_password: confirm_password,
    };
    repositoryUsers.addUser(data);
    const users = repositoryUserJSON.loadUsers();
    return res.json({
      data: users,
    });
  }
};

// PR UPDATE DATA BEUM SELESAI
const api_updateUser2 = (req, res) => {
  const { name, email, phone, username, password, confirm_password } = req.body;
  const data = {
    name: name,
    email: email,
    phone: phone,
    username: username,
    password: password,
    confirm_password: confirm_password,
  };
  repositoryUserJSON.updateUser(data);
  const users = repositoryUserJSON.loadUsers();
  res.json({
    data: users,
  });
};

const api_delUser2 = (req, res) => {
  const { id } = req.params;
  repositoryUserJSON.delUser(+id);
  const users = repositoryUserJSON.loadUsers();
  res.json({
    data: users,
  });
};

module.exports = {
  api_Users,
  api_UserById,
  api_addUser,
  api_updateUser,
  api_delUser,
  api_Users2,
  api_UserById2,
  api_UserByName2,
  api_addUser2,
  api_updateUser2,
  api_delUser2,
};
