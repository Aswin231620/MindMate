import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoute from "./routes/chat.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Mind Mate Backend is running 🚀");
});

// AI chat route
app.use("/api/chat", chatRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
