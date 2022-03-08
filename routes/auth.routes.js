const express = require("express");
const authControllers = require("../controllers/auth.controllers");
const renewTokenMiddle = require("../middlewares/renewTokenMiddle");

const authRoute = express.Router();


authRoute.get("/renew", renewTokenMiddle ,authControllers.renewToken);

authRoute.post("/new", authControllers.addUser);
authRoute.post("/", authControllers.loginUser);


module.exports = authRoute;
