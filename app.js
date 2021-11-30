const express = require("express");
const userRoutes = require("./Route");
const bodyParser = require("body-parser");
const app = express();
const Connection = require("./Config/Connection");
// const mailchimp = require("@mailchimp/mailchimp_marketing");
const run=require("./Config/mailchimp")
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

// mailchimp.setConfig({
//     apiKey: "37935d93677d07cfbab0da8682bd73ee-us20",
//     server: "us20",
//   });
//   async function run() {
//     const response = await mailchimp.ping.get();
//     console.log(response);
//   }
  
  run();

//   const event = {
//     name: "JS Developers Meetup"
//   };

app.listen(3500);
