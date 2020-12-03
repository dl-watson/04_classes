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
