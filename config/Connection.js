require("dotenv").config();

const mongoose=require("mongoose");
const {MONGO_URI}=require("./index");
module.exports=()=>{


mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => console.log(err));
}



