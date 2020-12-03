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

  #linter(item) {
    // returns true or false
  }
}

module.exports = Stack;
