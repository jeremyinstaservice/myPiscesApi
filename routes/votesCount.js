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

module.exports = router;
