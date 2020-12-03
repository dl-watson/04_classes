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

  validateBalanced(string) {
    let stack = [];
    // break the string into an array
    const arr = string.split("");
    // iterate over the new array
    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];
      // check if val is an open paren
      if (val === "(" || val === "[" || val === "{") {
        // if it is, add it to the stack
        stack.push(val);
      } else {
        // if it isn't, and the stack is empty, return false
        if (!stack) return false;
        // if the stack contains any items, check the last val in the stack
        else if (
          (val === ")" && _.last(stack) === "(") ||
          (val === "]" && _.last(stack) === "[") ||
          (val === "}" && _.last(stack) === "{")
        ) {
          // if the last val in the stack matches the closing paren, pop it off the stack
          stack.pop();
        } else {
          // if the last val in the stack is not a match, return false and exit the function
          return false;
        }

        return true;
      }
    }
  }

  // Evaluates the validity of the string's paren, bracket and brace usage
  evaluate() {
    const string = this.match(this.item);
    return this.validateBalanced(string);
  }
}

module.exports = Stack;

// const string = "functio]n add(a, b) ( return a + b; }";
// const stack = new Stack(string);
// stack.push();
// console.log("evaluate() =", stack.evaluate());
// console.log(stack.item);

const string = "function add(a, b) ( return a + b; )";
const stack = new Stack(string);
stack.push();
console.log("evaluate() =", stack.evaluate());
console.log(stack.item);
