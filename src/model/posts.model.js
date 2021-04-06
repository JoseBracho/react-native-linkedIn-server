const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postsSchema = new Schema({
  text_post: String,
  img_post: String,
  video_post: String,
  shared: {
    type: Schema.Types.ObjectId,
    ref: "posts",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});
postsSchema.methods.toJSON = function () {
  const { __v, ...post } = this.toObject();
  return post;
};

module.exports = model("posts", postsSchema);
