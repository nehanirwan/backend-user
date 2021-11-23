const express=require("express");
const controller=require("./controller");
const router=express.Router();
router.post('/add-user',controller.postAddUser);
router.delete('/delete-user/:id',controller.postDeleteUser);

module.exports=router;