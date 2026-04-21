require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./config/db"); // Ensure correct DB import
const officersRoutes = require("./routes/officers");
const dutyAssignmentsRoutes = require("./routes/dutyAssignments");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Ensure API routes are registered correctly
app.use("/api/officers", officersRoutes);
app.use("/api/dutyAssignments", dutyAssignmentsRoutes);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
