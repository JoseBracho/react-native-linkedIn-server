const { response, request } = require("express");

const Post = require("../model/posts.model");

const postPublish = async (req = request, res = response) => {
  const id = req.id;
  const body = req.body;
  const post = new Post({...body, userId: id});
  await post.save((err, postDB) => {
    if (err) {
      console.log(err); //Do not delete this line in case an error occurs to see the log
      res.status(500).json({
        done: false,
        error: "Communicate with the programmer: joseluisbracho0@gmail.com",
      });
    }
    res.json(postDB)
  });
};

module.exports = {
  postPublish,
};
