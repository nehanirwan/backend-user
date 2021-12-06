const mongoose=require("mongoose");
const {MONGO_URI}=require("./Index");
module.exports=()=>{
mongoose.connect(MONGO_URI)
  

  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => console.log(err));
}





