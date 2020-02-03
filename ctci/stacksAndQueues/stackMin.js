// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.

class Stack {
  constructor() {
    this.storage = [];
  }

  push(val) {
    this.storage.push(val);
  }

  pop() {
    this.storage.pop();
  }
}
