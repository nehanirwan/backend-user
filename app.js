const express = require("express");
const userRoutes = require("./Route");
const bodyParser = require("body-parser");
const app = express();
const Connection = require("./Config/Connection");

app.use(bodyParser.json());

app.use("/user", userRoutes);

Connection();

app.listen(process.env.PORT);
