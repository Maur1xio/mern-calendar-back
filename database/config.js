const {mongoose} = require("mongoose");

    try {
        mongoose.connect(process.env.URL__MONGO).then(res=> console.log("Db connected"));

    } catch (e) {
        throw new Error("Hubo un error al intentar conectar a la DB, inténtelo más tarde...")
    }
