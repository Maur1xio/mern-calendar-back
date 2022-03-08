
const jwt = require("jsonwebtoken");


function createJWT(id, name){
    return new Promise((res, rej)=>{

        const payload = {id, name};

        jwt.sign(payload,process.env.WORD_SECRET,{
            expiresIn : "2h"
        }, (err,token)=>{
            if(err){
                console.log(err);
                rej("Hubo un error al crear el token");
            }
            res(token);
        });

    })
}

module.exports = createJWT;