const express = require("express");
const userRoutes = require("./Route");
const bodyParser = require("body-parser");
const app = express();
const jwt=require("jsonwebtoken");
const Connection = require("./Config/Connection");
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occurred!'});
});
try{
Connection();
}catch(err){
    console.log(err);

}


app.listen(3500);

