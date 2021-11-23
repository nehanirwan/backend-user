const User=require("./Schema");

exports.postAddUser= async(req,res,next)=>{
    const name=req.body.name;
    const age=req.body.age;
    const address=req.body.address;

    try{

    const user=await new User({
        name,age,address
    })
    await user.save()
    return res.status(200).json({success:true,data:user,message:"User created successfully"})


}catch(err){
    console.log(err);
}
}

exports.postDeleteUser=async(req,res,next)=>{
   try{
       console.log(req.params.id)
       const pid=req.params.id;
       await User.deleteById(pid);
       return res.status(202).json({success:true,data:user,message:"User deleted sucessfully"})
   }catch(err){
       console.log(err);
   }
}




