const express = require("express");

var app = express();

app.use("/api", require("./userRoutes"));
app.use("/api", require("./productRoutes"));
app.use("/api", require("./clientRoutes"));
app.use("/api", require("./salesRoutes"));

module.exports = app;
