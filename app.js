const http=require("http");
const mongoose=require('mongoose');
const express = require("express");
const userRoutes=require('./route')
const bodyParser=require('body-parser');
const app = express()

app.use(bodyParser.json());


app.use("/user",userRoutes);

mongoose.connect("mongodb+srv://neha:neha_nirwan26@cluster0.r9kkh.mongodb.net/mongoose_Db?retryWrites=true&w=majority")
.then(result=>{
  console.log(result);
  app.listen(3500);
})
.catch(err=>console.log(err));