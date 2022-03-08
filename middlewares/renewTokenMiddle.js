
const jwt = require("jsonwebtoken");


const renewTokenMiddle = async(req,res,next) =>{

    const token = req.headers["x-token"];

    if(!token){
        return res.status(401).json({
            ok : false,
            msg : "No hay token"
        })
    }

    try {
        
        const {id,name} = jwt.verify(token, process.env.WORD_SECRET);
        

        req.uid = id;
        req.name = name;

    } catch (e) {
        return res.status(401).json({
            ok : false,
            msg : "Token inválido"
        })
    }

    next();



}
module.exports = renewTokenMiddle;