const express = require("express");
const app = express();
const { evaluate } = require("./lib/components/utils/utils.js");

app.use(express.json());

app.post("/api/v1/stack", (req, res) => {
  console.log(req.body.item);
  res.send(evaluate(req.body.item));
});

app.listen(7890, () => {
  console.log("Server started on port 7890");
});
