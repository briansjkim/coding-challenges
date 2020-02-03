// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.

class Stack {
  constructor() {
    this.storage = [];
    this.min = [];
  }

  push(val) {
    this.storage.push(val);

    var min = this.getMin();
    if (min !== undefined) {
      this.min.push(Math.min(min, val));
    } else {
      this.min.push(val);
    }
  }

  pop() {
    this.storage.pop();
    this.min.pop();
  }

  getMin() {
    // returns the minimum el
    if (this.min.length > 0) {
      // don't use pop() because it will delete the element from the min obj
      // if we do this, we don't store any of the minimum values
      return this.min[this.min.length - 1];
    }
  }
}

var stack = new Stack();
stack.push(-1);
stack.push(0);
stack.push(-3);
stack.push(4);
stack.getMin(); // -3
stack.pop();
stack.pop();
stack.push(-5);
stack.push(-3);
stack.getMin(); // -5
