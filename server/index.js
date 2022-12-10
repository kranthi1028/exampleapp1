const app = require("express")();
const express = require("express");
const http = require("http").createServer(app);
const cors = require("cors");
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.get("/hello", (req, res) => {
  res.status(200).send({ message: "succesfully connected" });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
