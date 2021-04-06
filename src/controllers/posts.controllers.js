const { response, request } = require("express");

const Post = require("../model/posts.model");
const Connected = require("../model/connected.model");

const {stringArray} = require("../helpers/stringArray");

const publish = (req = request, res = response) => {
  const id = req.id;
  const body = req.body;
  const post = new Post({ ...body, userId: id });
  post.save((err, postDB) => {
    if (err) {
      console.log(err); //Do not delete this line in case an error occurs to see the log
      return res.status(500).json({
        done: false,
        error: "Communicate with the programmer: joseluisbracho0@gmail.com",
      });
    }
    res.json({done: true, postDB});
  });
};
const shared = (req = request, res = response) => {
  const id_post = req.params.id;
  const id_user = req.id;
  const post = new Post({ shared: id_post, userId: id_user });
  post.save((err, postDB) => {
    if (err) {
      console.log(err); //Do not delete this line in case an error occurs to see the log
      return res.status(500).json({
        done: false,
        error: "Communicate with the programmer: joseluisbracho0@gmail.com",
      });
    }
    res.json({done: true, postDB});
  });
};
const view = async (req = request, res = response) => {
  const id = req.id;
  const connected = await Connected.find({receiver: id, is_accepted: true});
  const ids = stringArray(connected, id);
  const posts =  await Post.find().where('userId')
                                  .in(ids)
                                  .populate("userId",["name","img"])
                                  .populate("shared")
                                  .exec();
  const reverse = posts.reverse();                                
  res.json(reverse)
};
const deletePublish = (req = request, res = response) => {
  const id_publish = req.params.id;
  Post.findByIdAndDelete(id_publish, (err, postDB) => {
    if (err) {
      console.log(err); //Do not delete this line in case an error occurs to see the log
      return res.status(500).json({
        done: false,
        error: "Communicate with the programmer: joseluisbracho0@gmail.com",
      });
    }
    res.json({done: true, msg: "post deleted successfully"});
  })
}
module.exports = {
  publish,
  shared,
  view,
  deletePublish
};
