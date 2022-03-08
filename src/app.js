const express = require("express");
const authRoute = require("../routes/auth.routes");
const cors = require("cors");
const eventRoute = require("../routes/event.routes");

const app = express();

/* settings */
app.set("port", process.env.PORT || 3001);





/* middlewares */
app.use(express.json());
app.use(cors());

/* routes */
app.use("/auth", authRoute );
app.use("/event", eventRoute );




module.exports = app;
