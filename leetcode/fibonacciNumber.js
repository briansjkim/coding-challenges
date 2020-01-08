// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence
// such that each number is the sum of two preceding ones, starting from 0 and 1
// That is: F(0) = 0, F(1) = 1 => F(N) = F(N - 1) + F(N - 2), for N > 1
// Given N, calculate F(N)

// Example 1:
// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1

// Example 2:
// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2

// Example 3:
// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3

// using memoization, very fast
var fib = n => {
  var nums = [];
  nums[0] = 0;
  nums[1] = 1;

  for (var i = 2; i <= n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2];
  }
  return nums[n];
};

// console.log(fib(0)); // 0
// console.log(fib(2)); // 1
// console.log(fib(3)); // 2
// console.log(fib(4)); // 3
// console.log(fib(5)); // 5
// console.log(fib(6)); // 8
// console.log(fib(7)); // 13
// console.log(fib(8)); // 21
// console.log(fib(9)); // 34
// console.log(fib(10)); // 54

// recursive, slower than memoization
var fibRecursive = n => {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

// console.log(fibRecursive(0)); // 0
// console.log(fibRecursive(2)); // 1
// console.log(fibRecursive(3)); // 2
// console.log(fibRecursive(4)); // 3
// console.log(fibRecursive(5)); // 5
// console.log(fibRecursive(6)); // 8
// console.log(fibRecursive(7)); // 13
// console.log(fibRecursive(8)); // 21
// console.log(fibRecursive(9)); // 34
// console.log(fibRecursive(10)); // 54
