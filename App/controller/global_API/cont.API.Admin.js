const fs = require("fs");

const {
  loadAdmin,
  addAdmin,
  updateAdmin,
  delAdmin,
} = require("../../utils/admin.js");

const add_Admin = (req, res) => {
  const admins = loadAdmin();
  const { email } = req.body;
  const adminemail = admins.find((a) => a.email === email);
  if (adminemail) {
    return res.status(400).json({
      message: "Data Sudah ada",
    });
  } else {
    addAdmin(req.body);
    return res.json({ admins });
  }
};

const update_Admin = (req, res) => {
  updateAdmin(req.body.id);
  const admins = loadAdmin();
  return res.json({ data: admins });
};

const del_Admin = (req, res) => {
  delAdmin(req.body.id);
  const admins = loadAdmin();
  res.json(Object.values(admins));
};
const load_Admin = (req, res) => {
  const admins = loadAdmin();
  res.json(Object.values(admins));
};

module.exports = {
  load_Admin,
  add_Admin,
  update_Admin,
  del_Admin,
};
