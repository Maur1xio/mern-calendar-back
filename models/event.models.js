const {Schema,model} = require("mongoose");


const eventSchema = new Schema(
    {
        title : {
            type : String,
            required : true
        },
        notes : {
            type : String
        },
        start : {
            type : Date,
            required : true
        },
        end : {
            type : Date,
            required : true
        },
        user : {
            type : Schema.Types.ObjectId,
            required : true,
            ref : "user"
        }
    },
    {
        timestamps : true
    }
);


const eventModel = model("event", eventSchema);


module.exports = eventModel;