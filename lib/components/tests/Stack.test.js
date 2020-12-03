const Stack = require("../Stack");
const string = "function add(a, b) { return a + b; }";
const stack = new Stack(string);

describe("Stack class", () => {
  it("can add an item to the stack", () => {
    expect(stack.push()).toEqual("function add(a, b) { return a + b; }");
  });

  it("can add an item to the stack", () => {
    expect(stack.push()).toEqual("function add(a, b) { return a + b; }");
  });

  it("can take the item off the stack and return it", () => {
    expect(stack.pop()).toEqual("function add(a, b) { return a + b; }");
  });

  it("can scry the top of the stack", () => {
    expect(stack.scry()).toEqual("function add(a, b) { return a + b; }");
  });

  it("can filter out all characters except parens, brackets and braces", () => {
    expect(stack.match()).toEqual("(){}");
  });

  it("can indicate whether or not the syntax of the input is valid: works for valid cases", () => {
    expect(stack.evaluate()).toEqual(true);
  });

  it("can indicate whether or not the syntax of the input is valid: works for invalid cases", () => {
    const fail = "func(ti}on add(a, b { { return a + b; }";
    const instance = new Stack(fail);
    instance.push();
    expect(instance.evaluate()).toEqual(false);
  });
});
