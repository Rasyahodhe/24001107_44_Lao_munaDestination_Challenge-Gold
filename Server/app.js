const express = require("express");
const morgan = require("morgan");
const app = express(),
  expressEjsLayouts = require("express-ejs-layouts"),
  port = 3300;

// makes it easier to move pages
app.set("view engine", "ejs");
app.use(expressEjsLayouts);

// Build Middleware
app.use(express.static("public"));
app.use("/", morgan("dev"));
// For Json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Get The Router User
const { routeruser } = require("./router/routerusers");
app.use(routeruser);

// Get The Router Admin
const { routerAdmin } = require("./router/routeradmin");
app.use(routerAdmin);

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
