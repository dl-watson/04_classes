const _ = require("lodash");

class Stack {
  #stack;
  #item;

  constructor(item) {
    this.#stack = [];
    this.#item = item;
  }

  push() {
    // put item on top of stack
    this.#stack.push(this.#item);
    return this.#item;
  }

  pop() {
    // take item off the top of stack and return that item
    this.#stack.pop(this.#item);
    return this.#item;
  }

  scry() {
    // look at item on top of stack
    return _.last(this.#stack);
  }

  // Removes all characters from string that do not match the regex condition
  #match(string) {
    const regex = /(\(|\)|\[|\]|\{|\})/g;
    return this.#item
      .split("")
      .filter((letter) => letter.match(regex))
      .join("");
  }

  #validateBalanced(string) {
    let stack = [];
    const arr = string.split("");
    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];
      if (val === "(" || val === "[" || val === "{") {
        stack.push(val);
      } else {
        if (!stack) return false;
        else if (
          (val === ")" && _.last(stack) === "(") ||
          (val === "]" && _.last(stack) === "[") ||
          (val === "}" && _.last(stack) === "{")
        ) {
          stack.pop();
        } else {
          return false;
        }
        return true;
      }
    }
  }

  evaluate() {
    const string = this.#match(this.#item);
    return this.#validateBalanced(string);
  }
}

module.exports = Stack;

// const string = "function add(a, b) { return a + b; }";
// const stack = new Stack(string);
// console.log("evaluate() =", stack.evaluate());
