const Stack = require("../Stack");
const string = "function add(a, b) { return a + b; }";

describe("Stack class", () => {
  it("can add an item to the stack", () => {
    const stack = new Stack(string);

    expect(stack.push(string)).toEqual("");
  });

  it("can take the item off the stack and return it", () => {
    const stack = new Stack("");

    expect(stack.pop()).toEqual("");
  });

  it("can scry the top of the stack", () => {
    const stack = new Stack("");

    expect(stack.scry()).toEqual("");
  });
});
