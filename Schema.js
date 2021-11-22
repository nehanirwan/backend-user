const mongoose=require('mongoose');
const DbSchema=new mongoose.Schema({
    name:{
        type: String,
        require: true
     },
     age:{
         tpye:String,
     },
     address:{
         type:String,

     },
    

})
module.exports=mongoose.model('User',DbSchema)