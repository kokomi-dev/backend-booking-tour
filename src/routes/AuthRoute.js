const express = require("express");
const authController = require("../controllers/AuthController");
const upload = require("../middlewares/multerUpload");

const route = express.Router();

route.post("/register", upload.single(), authController.register);
route.get("/login", authController.login);
route.get("/logout", authController.logout);
module.exports = route;
