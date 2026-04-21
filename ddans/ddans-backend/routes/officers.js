const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// GET all officers
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM officers");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching officers:", error);
    res.status(500).json({ error: error.message }); // ✅ Send actual error message
  }
});

module.exports = router;
