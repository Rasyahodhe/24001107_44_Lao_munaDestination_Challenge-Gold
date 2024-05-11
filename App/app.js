const express = require("express");
const morgan = require("morgan");
const app = express(),
  expressEjsLayouts = require("express-ejs-layouts"),
  port = 3300;
const { route } = require("./router/admin.route.js");
const { route_d } = require("./router/des.route.js");
const { route_c } = require("./router/client.route.js");
const { route_Log } = require("./router/login.route.js");
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
// Get The Router Admin
app.use(route);
// Get The Router Destinations
app.use(route_d);
// Get The Router Client
app.use(route_c);

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
//   res.status("404").send("Page Not Found");
// });
