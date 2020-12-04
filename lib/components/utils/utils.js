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
    if (_.includes(open, val)) {
      stack.push(val);
    } else {
      if (!stack.scry()) result = false;
      let bracket = stack.pop();
      const pair = bracket + val;
      if (!_.includes(pairs, pair)) result = false;
    }
  });
  if (stack.scry()) result = false;

  // get the _pair_ for the result of stack.scry()
  const scry = stack.scry();
  if (!result) return { error: `extra '${scry}'` };
  else
    return {
      success: true,
    };
};

module.exports = { match, evaluate };

const string = "function add a{, b[]}{} (){} return a + b; {}";
console.log(evaluate(string));
