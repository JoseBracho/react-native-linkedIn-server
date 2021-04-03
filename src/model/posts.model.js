const mongoose = require("mongoose");
const {Schema, model} = mongoose;


const postsSchema = new Schema({
    text_post : String,
    img_post: String,
    video_post: String,  
})
postsSchema.methods.toJSON = function () {
    const { __v, ...post} = this.toObject();
    return post;
}

module.exports = model("posts", postsSchema);