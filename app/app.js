require("dotenv").config("../.env");
const express = require("express");
const { notFoundHandeler, errorHandeler } = require("./error");
const app = express();

app.use(require("./middleware"));
app.use(require("./routes"));
app.use(notFoundHandeler);
app.use(errorHandeler);

module.exports = app;
