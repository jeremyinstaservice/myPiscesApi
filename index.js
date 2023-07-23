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

const allowedOrigins = [
  "https://piscesconsultants.vercel.app",
  // "http://localhost:3000",
  // "http://localhost:5173",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Enable CORS for all routes
app.use(cors(corsOptions));

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/auth", authRoute);
app.use("/api/emails", emailRoute);

// Serve the index.html for all routes
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log("Mail API listening @localhost:" + PORT);
});
