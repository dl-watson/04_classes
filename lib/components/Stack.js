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

  // checks that all brackets match (), [], and {}

  #match(string) {
    const regex = /(\(|\)|\[|\]|\{|\})/g;
    const arr = this.item
      .split("")
      .filter((letter) => letter.match(regex))
      .join("");
    return arr;
  }

  #linter(string) {}

  evaluate() {
    const string = this.#match(this.item);
    // const evaluated = this.#linter(string);
    return string;
    // return evaluated;
  }
}

module.exports = Stack;

const string = "function add(a, b) { return a + b; }";
const stack = new Stack(string);

stack.push();
console.log(stack.item);
console.log(stack.evaluate());
console.log(stack.item);
