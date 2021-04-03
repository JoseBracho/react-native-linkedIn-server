const {response, request} = require("express");

const Post = require("../model/posts.model");

const postPublish = async (req = request, res = response) => {
    const id = req.params.id;
}

module.exports = {
    postPublish
}