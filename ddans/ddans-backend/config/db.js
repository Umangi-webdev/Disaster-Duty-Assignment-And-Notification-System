const { Pool } = require("pg");
require("dotenv").config(); // Ensure environment variables are loaded

const pool = new Pool({
  user: process.env.DB_USER,        // ✅ Corrected variable names
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;
