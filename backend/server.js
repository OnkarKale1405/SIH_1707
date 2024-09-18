const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({
  path: "./env",
});

const app = express();

app.use(cors());
app.use(express.json());

//  mongoose.connect(process.env.MONGODB_URI, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//  });

// Import routes
const authRoutes = require("./routes/auth");
const attendanceRoutes = require("./routes/attendance");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/attendance", attendanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
