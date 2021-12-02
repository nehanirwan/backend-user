const User = require("../Models/Schema");
const services = require("../Services/Services");
const transporter=require("../Utils/nodemailer");



exports.postAddUser = async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const address = req.body.address;
  console.log(name, age, address);
  try {
    const user = await services.postAddUser(name, age, address);
    return res.status(200).json({
      success: true,
      data: user,
      message: "User created successfully",
    });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, message: err.message });
  }
};
exports.postDeleteUserById = async (req, res) => {
  const pid = req.params.pid;
  console.log(pid);
  try {
    const results = await services.postDeleteUserById(pid);

    return res.json({ results });
  } catch (err) {
    console.log(err);
    return res.json({ success: false, message: err.message });
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
  const pid = req.params.pid;
  const address = req.body.address;
  try {
    if (address === "jaipur" || address === "delhi") {
      const result = await services.findOneAndUpdate(pid, req.body);
      return res
        .status(200)
        .json({ success: true, data: result, message: "User updated" });
    } else {
      return res.json({
        success: false,
        data: null,
        message: "Failed to update user",
      });
    }
  } catch (err) {
    console.log(err);
    return res.json({ success: false, data: null, message: err.message });
  }
};


exports.sendMailtoUser=(req,res)=>{
  console.log("hello");
  const options={
        from:"neha.nirwan11@gmail.com",
        to:"neha.nirwan@adglobal360.com",
        subject:"sending mail with node js",
        text: 'Node.js testing mail for GeeksforGeeks'
  }
  console.log(transporter);
transporter.sendMail(options, function(err, data) {
  console.log("hello1");
  if(err) {
      console.log(err,'ab');
  } else {
      console.log('Email sent successfully');
  }
});
}
