const createJWT = require("../helpers/createJWT");
const userModel = require("../models/users.models");

let authControllers = {};


authControllers.addUser = async function (req,res){

    const {email} = req.body

    try {
        
        /* Validemos que el correo no se repita */

        let newUser = await userModel.findOne({email});
        
        if(newUser){
            return res.status(400).json({
                state : false,
                msg : "Este correo ya está vinculado a una cuenta"
            })
        }

        newUser = new userModel(req.body);

        await newUser.save();

        const token = await createJWT(newUser._id, newUser.name);

        res.status(201).json({
            state : true,
            _id : newUser._id,
            token
        });

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            state : false
        })
    }

}

authControllers.loginUser = async function (req,res){


    const {password , email} = req.body

    let user = await userModel.findOne(
        {
            $and : [
                {password},
                {email}
            ]
        }
    );
    
    if(!user){
        return res.status(401).json({
            state : false,
            msg : "Correo o contraseña incorrectos."
        });
    }

    const token = await createJWT(user._id, user.name);

    res.json({
        state : true,
        id : user._id,
        token
    });
}


authControllers.renewToken = async function (req,res){

    const {uid, name} = req;

    const token = await createJWT(uid,name);

    res.json({token});
}

module.exports = authControllers;