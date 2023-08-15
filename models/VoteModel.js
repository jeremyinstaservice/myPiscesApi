const mongoose = require("mongoose");

const EmailModel = new mongoose.Schema({
  email: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Email", EmailModel);
