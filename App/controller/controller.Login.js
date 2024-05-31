const usersRepository = require("../repository/repository.users");

// Untuk menampilkan form login
const page_Login = (req, res) => {
  res.render("./components/login.ejs", {
    title: "Login Admin",
    layout: "./layouts/main_login.ejs",
    info: "",
    inforeg: "",
  });
};
// Untuk mengambil inputan user saat login
const getData_Login = async (req, res) => {
  const { username, password } = req.body;
  const users = await usersRepository.users();
  const getUser = await usersRepository.getuserByusername(username);
  const findUser = users.find((u) => u.username === username);
  const findPass = users.find((u) => u.password === password);
  if (!findUser || !findPass) {
    res.render("./components/login.ejs", {
      title: "Login Admin",
      layout: "./layouts/main_login.ejs",
      info: "Username Atau Password Tidak Benar",
      inforeg: "",
    });
  } else {
    getUser.forEach((user) => {
      if (username === user.username && password === user.password) {
        return res.render("./components/users/all_Comp.ejs", {
          title: "Dashboard",
          layout: "./layouts/main_Lay_Client.ejs",
          menu: "./html/com_Home.ejs",
          name: user.username,
          user,
        });
      }
    });
  }
};

const register_User = async (req, res) => {
  const {
    nameUser,
    usernameUser,
    phoneUser,
    emailUser,
    passUser,
    confirmPass,
  } = req.body;
  const users = await usersRepository.users();
  // untuk mencari data user
  const userName = users.find((u) => {
    return u.username === usernameUser;
  });
  // Mengecek apakah Data user ada atau tidak
  if (!userName) {
    const users = await usersRepository.users();
    const userEmail = users.find((u) => {
      return u.email === emailUser;
    });
    // Untuk mengecek apakah email yang digunakan telah dipakai
    if (userEmail) {
      return res.render("./components/login.ejs", {
        title: "Login Admin",
        layout: "./layouts/main_login.ejs",
        info: "",
        inforeg: "Email Telah diGunakan",
      });
    } else {
      // Mengecek apakah password dan confir pasnya sama
      if (passUser !== confirmPass) {
        return res.render("./components/login.ejs", {
          title: "Login Admin",
          layout: "./layouts/main_login.ejs",
          info: "",
          inforeg: "Password dan Confirm Password tidak sama",
        });
      } else {
        const data = {
          name: nameUser,
          email: emailUser,
          phone: phoneUser,
          username: usernameUser,
          password: passUser,
          confirm_password: confirmPass,
        };
        await usersRepository.addUser(data);
        return res.render("./components/login.ejs", {
          title: "Login Admin",
          layout: "./layouts/main_login.ejs",
          info: "",
          inforeg: "Data Berhasil ditambahkan",
        });
      }
    }
  }
  if (userName) {
    return res.render("./components/login.ejs", {
      title: "Login Admin",
      layout: "./layouts/main_login.ejs",
      info: "",
      inforeg: "Username Telah digunakan",
    });
  }

  // if (findUser || findPhone || findEmail) {
  //   res.send(
  //     "data username atau phone atau email telah terpakai mohon di cek kembali"
  //   );
  // } else {
  //   const data = {
  //     name: nameUser,
  //     email: emailUser,
  //     phone: phoneUser,
  //     username: usernameUser,
  //     password: passUser,
  //     confirm_password: confirmPass,
  //   };
  //   await usersRepository.addUser(data);
  //   return res.render("./components/login.ejs", {
  //     title: "Login Admin",
  //     layout: "./layouts/main_login.ejs",
  //     info: "",
  //   });
  // }
};
module.exports = {
  page_Login,
  getData_Login,
  register_User,
};
