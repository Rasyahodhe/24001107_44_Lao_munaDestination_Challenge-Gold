const express = require("express");
const morgan = require("morgan");
const app = express(),
  expressEjsLayouts = require("express-ejs-layouts"),
  port = 3300;
const { route_u } = require("./router/users.route.js");
const { route_Log } = require("./router/login.route.js");

// Api Global

const { r_global_us } = require("./router/grobal_Route/g.users.route.js");

// makes it easier to move pages
app.set("view engine", "ejs");
app.use(expressEjsLayouts);

// Build Middleware
app.use(express.static("public"));
app.use("/", morgan("dev"));
// For Json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Get The Router Login
app.use(route_Log);
// // Get The Router User
app.use(route_u);

// ===============================Api Global
app.use(r_global_us);

app.listen(port, () => {
  console.log(`Server Active, this program run in http://localhost:${port}`);
});

app.use("/", (req, res) => {
  res.status(404).render("./layouts/notFound.ejs", {
    title: "Page Not Found",
    layout: "./layouts/notFound.ejs",
  });
});

// app.use("/", (req, res) => {
// res.status("404").send("Page Not Found");
// });
