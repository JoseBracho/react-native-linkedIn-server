const { response, request } = require("express");

const Connected = require("../model/connected.model");


const connected = async (req = request , res = response) => {
    const query = {receiver: req.id, is_accepted : true};
    const [total, connect] = await Promise.all([
        Connected.countDocuments(query),
        Connected.find(query).populate("sender",["name","img"])
      ]);
    res.json({
        total,
        connect
    })
}
const send = (req = request, res = response) => {
  const id = req.id;
  const body = req.body;
  const connected = new Connected({ receiver: body.receiver, sender: id });
  connected.save((err, connecteDB) => {
    if (err) {
      return res.status(500).json({
        done: false,
        err,
      });
    }
    res.json(connecteDB);
  });
};
const received = async (req = request, res = response) => {
  const query = {receiver: req.id, is_accepted: false};
  const [total, sender] = await Promise.all([
      Connected.countDocuments(query),
      Connected.find(query).populate("sender",["name","img"])
    ]);
  res.json({
      total,
      sender
  })
}
const agree =  (req = request, res = response) => {
    const id = req.params.id;
    const update = {is_accepted : true};
    Connected.findByIdAndUpdate(id, update, (err, connectDB) => {
        if (err) {
            console.log(err); //Do not delete this line in case an error occurs to see the log
            return res.status(500).json({
              done: false,
              error: "Communicate with the programmer: joseluisbracho0@gmail.com",
            });
          }
        res.json({
            done:true,
            msg: "You just connected"
        })
    })
};
const deleteConnected = (req = request, res = response) => {
    const id = req.params.id;
    Connected.findByIdAndDelete(id, (err, connectDB) => {
        if (err) {
            console.log(err); //Do not delete this line in case an error occurs to see the log
            return res.status(500).json({
              done: false,
              error: "Communicate with the programmer: joseluisbracho0@gmail.com",
            });
          }
        res.json({
            done:true,
            msg: "has been deleted"
        })
    })
}

module.exports = {
  connected,
  send,
  received,
  agree,
  deleteConnected
};
