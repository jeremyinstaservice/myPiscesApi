const express = require("express");
const router = express.Router();
const VoteModel = require("../models/VoteModel");

// GET VOTE COUNT
router.get("/", async (req, res) => {
  try {
    const voteCount = await VoteModel.find({});
    res.status(200).json(voteCount);
  } catch (error) {
    res.status(404).json({
      message: "Votes not found",
      error: error.message,
    });
  }
});

// UPDATE VOTE COUNT
router.put("/voting", async (req, res) => {
  try {
    const newVotes = req.body.vote_count;

    const Votes = new VoteModel({
      voteCount: newVotes,
    });

    const vote = await Votes.save();
    const { voteCount } = vote._doc;
    res.status(200).json({ voteCount });
  } catch (error) {
    res.status(400).json({
      message: "Updating vote failed",
      error: error.message,
    });
  }
});

module.exports = router;
