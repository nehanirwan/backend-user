const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.post("/add-user", controller.postAddUser);
router.delete("/delete-user/:id", controller.postDeleteUserById);
router.delete("/delete-all", controller.deleteAllUser);
router.patch("/update-user/:id", controller.findOneAndUpdate);

module.exports = router;
