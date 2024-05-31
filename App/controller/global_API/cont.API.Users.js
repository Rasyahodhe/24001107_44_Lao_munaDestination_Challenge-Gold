const repositoryUsers = require("../../repository/repository.users");

// ================== GET
// Get Users
const api_Users = async (req, res) => {
  const users = await repositoryUsers.users();
  return res.json({
    message: "Sukses Mengambil Semua Data",
    data: users,
  });
};
const api_UserById = async (req, res) => {
  const { id } = req.params;
  const users = await repositoryUsers.users();
  const user = await repositoryUsers.getuserByid(id);
  const getIDUser = users.find((u) => {
    return u.user_id === id;
  });

  if (!getIDUser) {
    return res.json({
      message: "Data Id yang di cari tidak ada",
    });
  } else {
    return res.json({
      message: "Data Berhasil diambil berdasarkan Id",
      data: user,
    });
  }
};
const api_UserByname = async (req, res) => {
  const { name } = req.params;
  const users = await repositoryUsers.users();
  const user = await repositoryUsers.getuserByname(name);
  const getName = users.find((u) => {
    return u.name === name;
  });

  if (!getName) {
    return res.json({
      message: "Data Nama Tidak ada dalam Database",
    });
  }
  return res.json({
    message: "Data Berhasil di get Berdasarkan Nama",
    data: user,
  });
};
const api_UserByusername = async (req, res) => {
  const { username } = req.params;
  const users = await repositoryUsers.users();
  const user = await repositoryUsers.getuserByusername(username);
  const getUsername = users.find((u) => {
    return u.username === username;
  });
  if (!getUsername) {
    return res.json({
      message: "Data Username tidak ada dalam Database",
    });
  }
  return res.json({
    message: "Data Berhasil Diambil Berdasarkan Username",
    data: user,
  });
};

// ================== POST
// Add User
const api_addUser = async (req, res) => {
  const { name, email, phone, username, password, confirm_password } = req.body;
  const users = await repositoryUsers.users();
  const nameUser = users.find((u) => {
    return u.username === username;
  });

  if (!nameUser) {
    const users = await repositoryUsers.users();
    const userEmail = users.find((u) => {
      return u.email === email;
    });
    if (userEmail) {
      res.json({
        message: "Email Telah di gunakan",
      });
    } else {
      if (password !== confirm_password) {
        res.json({
          message: "Password Tidak cocok Silahkan Cek kembali",
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
          message: "Data Berhasil Ditambahkan",
          data: users,
        });
      }
    }
  }
  if (nameUser) {
    res.json({
      message: "Username telah digunakan",
    });
  }
};
// ================== PUT
// Update User
const api_updateUser = async (req, res) => {
  const { id } = req.params;

  const users = await repositoryUsers.users();
  const getId = users.find((u) => {
    return u.user_id === +id;
  });
  if (!getId) {
    res.json({
      message: `Data User Id ${id} Tidak Ada`,
    });
  } else {
    const { name, email, phone, username, password, confirm_password } =
      req.body;
    const data = {
      name: name,
      email: email,
      phone: phone,
      username: username,
      password: password,
      confirm_password: confirm_password,
    };
    await repositoryUsers.updateUser(data, +id);
    const users = await repositoryUsers.users();
    return res.json({
      message: `Data Id ${id} Berhasil diupdate`,
      data: users,
    });
  }
};

// ================== DELETE
// Delete User
const api_delUser = async (req, res) => {
  const { id } = req.params;
  await repositoryUsers.dellUser(id);
  const users = await repositoryUsers.users();
  const getId = users.find((u) => {
    return u.user_id === +id;
  });
  if (!getId) {
    return res.json({
      message: `Data Id ${id} yang ingin dihapus tidak ada dalam database`,
    });
  } else {
    return res.json({
      message: `Data Id ${id} Berhasil dihapus`,
      data: users,
    });
  }
};

const api_delByusername = async (req, res) => {
  const { username } = req.params;
  const users = await repositoryUsers.users();
  const getUsername = users.find((u) => {
    return u.username === username;
  });
  if (!getUsername) {
    return res.json({
      message: "Data yang ingin dihapus tidak ada dalam database",
    });
  } else {
    await repositoryUsers.delUserByUsername(username);
    const users = await repositoryUsers.users();
    res.json({
      message: `Data Username : ${username} berhasil diihapus`,
      data: users,
    });
  }
};

module.exports = {
  api_Users,
  api_UserById,
  api_UserByname,
  api_UserByusername,
  api_addUser,
  api_updateUser,
  api_delUser,
  api_delByusername,
};
