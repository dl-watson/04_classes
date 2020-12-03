class Stack {
  #stack;
  #item;

  constructor(item) {
    this.#stack = [];
    this.#item = item;
  }

  push(item) {
    // put item on top of stack
  }

  pop(item) {
    // take item off the top of stack and return that item
  }

  scry(item) {
    // look at item on top of stack
  }

  #linter(item) {
    // returns true or false
  }
}

module.exports = Stack;
