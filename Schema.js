const mongoose = require("mongoose");
const DbSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: String,
  },
  address: {
    type: String,
    enum: ["jaipur", "sara"],
  },
});
module.exports = mongoose.model("User", DbSchema);
