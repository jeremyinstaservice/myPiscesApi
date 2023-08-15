const express = require("express");
const { findOne } = require("../models/VoteModel");
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
router.post("/voting", async (req, res) => {
  try {
    const newVotes = req.body.vote_count;

    const existingVote = await VoteModel.findOne();

    if (existingVote) {
      existingVote.voteCount = newVotes;
      await existingVote.save();
    } else {
      // Create a new vote count document
      const Votes = new VoteModel({
        voteCount: newVotes,
      });
      await Votes.save();
    }

    res.status(200).json({ voteCount: newVotes });
  } catch (error) {
    res.status(400).json({
      message: "Updating vote failed",
      error: error.message,
    });
  }
});

module.exports = router;
