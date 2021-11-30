const User = require("../Models/Schema");
const HttpError = require("../Utils/Http-error");

exports.postAddUser = async (name, age, address) => {
  try {
    const user = await new User({
      name,
      age,
      address,
    });
    const result = await user.save();
    return result;
  } catch (err) {
    throw new HttpError("Cannot create user ", 500);
  }
};

exports.postDeleteUserById = async (pid) => {
  try {
    await User.findByIdAndDelete(pid);
    return {
      success: true,
      data: pid,
      message: "User deleted sucessfully",
    };
  } catch (err) {
    throw new HttpError("can't find the user for given Id", 401);
  }
};
exports.deleteAllUser = async () => {
  try {
    await User.deleteAllUser();
    {
      throw new HttpError("no user to delete", 401);
    }
  } catch (err) {
    console.log(err);
  }
};
exports.findOneAndUpdate = async (pid, data) => {
  console.log(pid);
  try {
    const isValid = await User.findById(pid);
    if (isValid) {
      const result = await User.findOneAndUpdate(pid, {
        name: data.name,
        address: data.address,
        age: data.age,
      });
      return result;
    }
  } catch (err) {
    console.log(err);
    throw new HttpError("Invalid user Id", 404);
  }
};
