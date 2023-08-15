const mongoose = require("mongoose");

const VoteModel = new mongoose.Schema({
  voteCount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Votes", VoteModel);
