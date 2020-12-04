const express = require("express");
const app = express();
const Stack = require("./components/Stack");

app.use(express.json());

app.post("/api/v1/stack", (req, res) => {
  const stack = new Stack(req.body.item);
  res.send(stack.evaluate());
});

app.listen(7890, () => {
  console.log("Server started on port 7890");
});
