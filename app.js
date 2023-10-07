import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, expres");
});

const port = 5000;
app.listen(port, () => {
  console.log(`allication is running on port ${port}`);
});
