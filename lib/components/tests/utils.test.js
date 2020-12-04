const { evaluate, match } = require("../utils/utils");
const string = "function add a, ()()b[] (){} return a + b; {}";

describe("", () => {
  it("can filter out all characters except parens, brackets and braces", () => {
    const actual = match(string);
    expect(actual).toEqual("()()[](){}{}");
  });

  it("can indicate whether or not the syntax of the input is valid: works for valid cases", () => {
    const actual = evaluate(string);
    expect(actual).toEqual(true);
  });

  it("can indicate whether or not the syntax of the input is valid: works for invalid cases", () => {
    const fail = "func(ti}on add(a, b { { return a + b; }";
    const actual = evaluate(fail);
    expect(actual).toEqual(false);
  });
});
