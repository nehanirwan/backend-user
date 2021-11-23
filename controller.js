const User = require("./Schema");

exports.postAddUser = async (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const address = req.body.address;

  try {
    const user = await new User({
      name,
      age,
      address,
    });
    await user.save();
    return res.status(200).json({
      success: true,
      data: User,
      message: "User created successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postDeleteUserById = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const pid = req.params.id;
    await User.findByIdAndDelete(pid);
    return res
      .status(202)
      .json({ success: true, data: User, message: "User deleted sucessfully" });
  } catch (err) {
    console.log(err);
  }
};
exports.deleteAllUser = async (req, res, next) => {
  try {
    await User.remove();
    return res
      .status(202)
      .json({ success: true, data: User, message: "all user deleted" });
  } catch (err) {
    console.log(err);
  }
  //update
};
exports.findOneAndUpdate = async (req, res, next) => {
  try {
    const pid = { id: req.params.id };

    await User.findOneAndUpdate(pid, req.body);
    return res
      .status(200)
      .json({ success: true, data: User, message: "User updated" });
  } catch (err) {
    console.log(err);
  }
};
