const express = require("express");
const controller = require("./Controller/Controller");
const router = express.Router();
router.post("/add-user", controller.postAddUser);
router.delete("/delete-user/:pid", controller.postDeleteUserById);
router.delete("/delete-all", controller.deleteAllUser);
router.patch("/update-user/:pid", controller.findOneAndUpdate);
module.exports = router;
