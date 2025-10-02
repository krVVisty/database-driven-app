import express from "express";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

// --- DB connection ---
// 🔹 Fixed IPv4 Session Pooler Supabase
const pool = new Pool({
  user: "postgres",
  host: "aws-1-eu-west-2.pooler.supabase.com", // <-- changed from db.avcbcudxvaccbvjjqeql.supabase.co
  database: "postgres",
  password: "hZrFqt2iFQQckXYp",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

// --- Routes ---

app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM posts ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.post("/posts", async (req, res) => {
  const { title, content } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// --- Start server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
