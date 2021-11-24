require('dotenv').config({path: './.env' });
const mongoose = require("mongoose");
const express = require("express");
const userRoutes = require("./route");
const bodyParser = require("body-parser");
const app = express();
const Connection=require('./config/Connection');

app.use(bodyParser.json());

app.use("/user", userRoutes);

Connection();



app.listen(process.env.PORT);