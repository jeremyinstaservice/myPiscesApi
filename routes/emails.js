const express = require("express");
const router = express.Router();
const EmailModel = require("../models/EmailModel");

// GET EMAIL
router.get("/", async (req, res) => {
  try {
    const emails = await EmailModel.find({});
    res.status(200).json(emails);
  } catch (error) {
    res.status(404).json({
      message: "Emails not found",
      error: error.message,
    });
  }
});

module.exports = router;
