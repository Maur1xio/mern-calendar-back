require("dotenv").config();
require("../database/config");
const app = require("./app");



console.clear();

app.listen(app.get("port"), function(){
    console.log(`Server on the port ${app.get("port")}`);
})