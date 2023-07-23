const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const PORT = process.env.PORT || 8080;
const authRoute = require("./routes/auth");
const emailRoute = require("./routes/emails");

const app = express();

dotenv.config();

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/auth", authRoute);
app.use("/api/emails", emailRoute);

app.listen(PORT, () => {
  console.log("Mail API listening @localhost:" + PORT);
});
