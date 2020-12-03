const Stack = require("../Stack");
const string = "function add(a, b) { return a + b; }";
const stack = new Stack(string);

describe("Stack class", () => {
  it("can add an item to the stack", () => {
    expect(stack.push()).toEqual("function add(a, b) { return a + b; }");
  });

  it("can take the item off the stack and return it", () => {
    expect(stack.pop()).toEqual("function add(a, b) { return a + b; }");
  });

  it("can scry the top of the stack", () => {
    const stack = new Stack("");

    expect(stack.scry()).toEqual("");
  });
});
