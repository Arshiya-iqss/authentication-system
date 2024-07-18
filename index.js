const express = require("express");
const connectDB = require("./db");
const bodyparser = require("body-parser");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
connectDB();

// Parsing JSON request body
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Defining authentication routes
app.use("/auth", authRoutes);

// Defining user routes
app.use("/user", userRoutes);

// Starting server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
