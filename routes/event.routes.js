const express = require("express");
const eventControllers = require("../controllers/event.controllers");
const renewTokenMiddle = require("../middlewares/renewTokenMiddle");

const eventRoute = express.Router();

eventRoute.use(renewTokenMiddle);

eventRoute.get("/", eventControllers.getEvents ); 

eventRoute.post("/", eventControllers.createEvent );

eventRoute.put("/:id", eventControllers.updateEvent );

eventRoute.delete("/:id", eventControllers.deleteEvent );





module.exports = eventRoute;