const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const PORT = process.env.PORT || 8080;
const authRoute = require("./routes/auth");
const emailRoute = require("./routes/emails");
const voteCount = require("./routes/votesCount");

const app = express();

dotenv.config();

app.use(express.json());

app.use(
  cors({
    origin: [
      "https://piscesconsultants.vercel.app",
      "http://localhost:5173",
      // "https://anotherdomain.com",
    ],
  })
);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/auth", authRoute);
app.use("/api/emails", emailRoute);
app.use("/api/voteCount", voteCount);

// Serve the index.html for all routes
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log("Mail API listening @localhost:" + PORT);
});
