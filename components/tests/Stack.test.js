const Stack = require("./Stack");

describe("Stack class", () => {
  it("can add an item to the stack", () => {
    const stack = new Stack();

    expect(stack.push()).toEqual("");
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
