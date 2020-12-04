const _ = require("lodash");

class Stack {
  #stack;
  item;

  constructor(item) {
    this.#stack = [];
    this.item = item;
  }

  push() {
    // put item on top of stack
    this.#stack.push(this.item);
    return this.item;
  }

  pop() {
    // take item off the top of stack and return that item
    this.#stack.pop(this.item);
    return this.item;
  }

  scry() {
    // look at item on top of stack
    return _.last(this.#stack);
  }

  // Removes all characters from string that do not match the regex condition
  match(string) {
    const regex = /(\(|\)|\[|\]|\{|\})/g;
    return this.item
      .split("")
      .filter((letter) => letter.match(regex))
      .join("");
  }

  // realizing that it's probably more effective to extract this into its own file
  validateBalanced(string) {
    const arr = string.split("");
    let stack = [];
    console.log(arr);

    const open = ["(", "[", "{"];
    const close = [")", "]", "}"];

    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];
      if (_.includes(open, val)) {
        stack.push(val);
      } else {
        if (!stack) return false;
        if (
          (val === close[0] && _.last(stack) === open[0]) ||
          (val === close[1] && _.last(stack) === open[1]) ||
          (val === close[2] && _.last(stack) === open[2])
        ) {
          stack.pop();
        }
        if (stack) return false;
      }

      return true;
    }
  }

  evaluate() {
    const string = this.match(this.item);
    return this.validateBalanced(string);
  }
}

module.exports = Stack;

const string = "function add a,{ {b[] (){} r}eturn a + b; {}";
const stackInstance = new Stack(string);
console.log("evaluate() =", stackInstance.evaluate());
