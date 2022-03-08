const eventModel = require("../models/event.models");

const eventControllers = {};


eventControllers.getEvents = async(req,res) => {


    try {
        
        const events = await eventModel.find().populate("user", "_id name");
        res.json(events);

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            ok : false,
            msg : "Error inesperado, intente más tarde."
        })
    }

};

eventControllers.createEvent = async(req,res) => {

    try {
        const event = new eventModel(req.body);
        await event.save();
        res.json({
            ok : true,
            id : event._id
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            ok : false,
            msg : "Error inesperado, intente más tarde."
        })
    }


};

eventControllers.updateEvent = async(req,res) => {

    const {id} = req.params;

    try {
        const eventUpdated = await eventModel.findByIdAndUpdate(id, {
            $set : {
                ...req.body
            }
        }, {new : true});
    
        res.json({
            ok : true,
            msg : eventUpdated
        })
    } catch (e) {
        console.log(e);
        return res.status(401).json({
            ok : false,
            msg: "Error de actualización."
        });
    }
};

eventControllers.deleteEvent = async(req,res) => {

    const {id} = req.params;
    
    try {

        await eventModel.findByIdAndDelete(id);

        res.json({
            ok : true,
            msg : `Evento ${id} eliminado`
        });

    } catch (e) {

        console.log(e);
        return res.status(401).json({
            ok : false,
            msg: "Error de eliminación."
        });

    }
  
};


module.exports = eventControllers;