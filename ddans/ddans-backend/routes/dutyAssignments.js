const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// GET all duty assignments
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM duty_assignments");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching duty assignments:", error);
    res.status(500).json({ error: error.message }); // ✅ Send actual error message
  }
});

module.exports = router;
