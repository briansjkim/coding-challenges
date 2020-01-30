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

var MinStack = function () {
  this.storage = [];
  this.min = [];
}

MinStack.prototype.push(x) {
  this.storage.push(x);
}

MinStack.prototype.pop() {
  this.storage.pop();
  this.min.pop();
}

MinStack.prototype.top() {

}

MinStack.prototype.getMin() {

}
