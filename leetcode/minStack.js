// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time

// push(x) -- Push element x onto stack
// pop() -- Removes the element on top of the stack
// top() -- Get the top element
// getMin() -- Retrieve the minimum element in the stack

// Example
// var minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // -3
// minStack.pop();
// minStack.top(); // 0
// minStack.getMin(); // -2


// 96ms
var MinStack = function () {
  this.storage = [];
  this.min = [];
}

MinStack.prototype.push = function (x) {
  this.storage.push(x);

  let min = this.getMin();

  if (this.min.length) {
    this.min.push(Math.min(x, min));
  } else {
    this.min.push(x);
  }
}

MinStack.prototype.pop = function () {
  this.storage.pop();
  // also pop the last element from min since it's no longer in storage
  this.min.pop();
}

MinStack.prototype.top = function () {
  if (this.storage.length) {
    return this.storage[this.storage.length - 1];
  }
}

MinStack.prototype.getMin = function () {
  if (this.min.length) {
    return this.min[this.min.length - 1];
  }
}

// var minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin()); // -3
// minStack.pop();
// console.log(minStack.top()); // 0
// console.log(minStack.getMin()); // -2
