const {Schema, model} = require("mongoose");

const ConnectedSchema = new Schema({
    receiver:{ 
        type: String,
        reqired: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    is_accepted: {
        type: Boolean,
        default: false
    }
})
ConnectedSchema.methods.toJSON = function () {
    const { __v, ...connected } = this.toObject();
    return connected;
  };
  
  module.exports = model("connecteds", ConnectedSchema);