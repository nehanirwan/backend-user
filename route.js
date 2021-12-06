const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const controller = require("./Controller/Controller");
const router = express.Router();
const mailchimp=require("./Config/mailchimp");


router.post("/add-user", controller.postAddUser);
router.delete("/delete-user/:pid", controller.postDeleteUserById);
router.delete("/delete-all", controller.deleteAllUser);
router.patch("/update-user/:pid", controller.findOneAndUpdate);
router.get("/get/",mailchimp.getlist);
router.post("/post-list",mailchimp.postlist);
router.post("/login-user",controller.postlogin);
module.exports = router;
