const Stack = require("../Stack");
const _ = require("lodash");

// Removes all characters from string that do not match the regex condition
const match = (string) => {
  const regex = /(\(|\)|\[|\]|\{|\})/g;
  return string
    .split("")
    .filter((letter) => letter.match(regex))
    .join("");
};

const evaluate = (string) => {
  const data = match(string).split("");
  const stack = new Stack(data);

  const open = ["(", "[", "{"];
  const pairs = ["()", "[]", "{}"];

  let result = true;

  data.map((val) => {
    let bracket = "";
    if (_.includes(open, val)) {
      stack.push(val);
    } else {
      if (!stack.scry()) result = false;
      bracket = stack.pop();
      const pair = bracket + val;
      if (!_.includes(pairs, pair)) result = false;
    }
  });
  if (stack.scry()) result = false;

  return result;
};

module.exports = { match, evaluate };
