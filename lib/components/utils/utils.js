const Stack = require("../Stack");
const _ = require("lodash");

// Removes all characters from string that do not match the regex condition
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
  const bracket = getMatching(scry);
  if (!result) return { error: `extra '${bracket}'` };
  else
    return {
      success: true,
    };
};

const match = (string) => {
  const regex = /(\(|\)|\[|\]|\{|\})/g;
  return string
    .split("")
    .filter((letter) => letter.match(regex))
    .join("");
};

const getMatching = (bracket) => {
  // bracket is result of scry
  const open = ["(", "[", "{"];
  const close = [")", "]", "}"];

  if (_.includes(open, bracket)) return close[open.indexOf(bracket)];
  else return open[close.indexOf(bracket)];
};

module.exports = { match, evaluate };

// const string = "function add a{, b[]{} (){} return a + b; {}";
// console.log(evaluate(string));
