const User = require("./Models/Schema");
const services = require("./Services/Services");

exports.postAddUser = async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const address = req.body.address;
  console.log(name,age,address);
  try {
    const user = await services.postAddUser(name, age, address);
    return res.status(200).json({
      success: true,
      data: user,
      message: "User created successfully",
    });
  } catch (err) {
    console.log(err);
    return res.json({success:false,message:err.message})
  }
};
exports.postDeleteUserById = async (req, res) => {
  const pid=req.params.pid
  try {
     services.postDeleteUserById(pid);
    return res.status(202).json({ 
      success: true, 
      data: pid, 
      message: "User deleted sucessfully" 
    });
  } catch (err) {
    console.log(err);
    return res.json({success:false,message:err.message})
  }
};
exports.deleteAllUser = async (req, res) => {
  try {
    const user = await services.deleteAllUser(user);
    return res
      .status(202)
      .json({ success: true, data: user, message: "all user deleted" });
  } catch (err) {
    console.log(err);
  }
};
exports.findOneAndUpdate = async (req, res) => {
  const pid=req.params.id;
  const{name,address,age}=req.body;
  try {
    if(address==="jaipur"||address==="delhi"){
     await services.findOneAndUpdate(pid,name,address,age);
    return res
      .status(200).json({ success: true, data: User, message: "User updated" });
    }
    else{
      return res.json({
        success:false,
        message:"Failed to update user",
      })
    }
  } catch (err) {
    console.log(err);
    return res.json({success:false,message:err.message})
  }
};
