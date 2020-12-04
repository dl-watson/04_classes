const _ = require("lodash");

class Stack {
  stack;

  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
    return item;
  }

  pop() {
    return this.stack.pop();
  }

  scry() {
    return _.last(this.stack);
  }
}

module.exports = Stack;
