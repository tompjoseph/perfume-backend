import express from "express";
import { connectDB } from "./config/db.js";

const app = express();
const port = 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
