const User=require("./Schema");

exports.postAddUser= async(req,res,next)=>{
    const name=req.body.name;
    const age=req.body.age;
    const address=req.body.address;

    const user=new User({
        name,age,address
    })
    await user.save()
    return res.status(200).json({success:true,data:user,message:"User created successfully"})
    console.log('hello');

}