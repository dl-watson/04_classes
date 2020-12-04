const express = require("express");
const app = express();
const { evaluate } = require("./lib/components/utils/utils.js");

app.use(express.json());

/*
Testing this endpoint requires sending raw JSON in this format: 
{
    "code": "func{[[tion[ add(a, b) { return a + b; }"
}
The response will be the result of the evaluation
*/

app.post("/lint", (req, res) => {
  res.send(evaluate(req.body.code));
});

app.listen(7890, () => {
  console.log("Server started on port 7890");
});
