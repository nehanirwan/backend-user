const User = require("../Models/Schema");
const HttpError=require("../Utils/Http-error");

exports.postAddUser = async (name, age, address) => {
  try {
  const user = await new User({
    name,
    age,
    address,
  });
  const result = await user.save();
  return result;
}catch (err){
  throw new HttpError("Cannot create user ",500)
  }
}

exports.postDeleteUserById = async (pid) => {
  try{
  await User.findByIdAndDelete(pid);
  if(!User){
    throw new HttpError("can't find the user for given Id",401)
  }
}catch(err){
  console.log(err);
}
};

exports.deleteAllUser = async () => {
  try{
  await User.deleteAllUser();
  }catch(err){
    console.log(err);
  }
};
exports.findOneAndUpdate = async (pid) => {
  try{
  await User.findOneAndUpdate(pid);
  }catch(err){
    console.log(err);
  }
};
