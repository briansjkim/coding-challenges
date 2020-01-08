// you are climbing a stair case. it takes n steps to reach to the top
// each time you can either clime 1 or 2 steps. in how many distinct ways can you climb to the top?
// Note: Given n will be a positive integer

// Example 1:
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// basically, it's fibonacci
var climbStairs = n => {
  // create an array to store the number of steps per n
  var steps = [];
  // solves for 0
  steps[0] = 1;
  // solves for 1
  steps[1] = 1;

  // start at 2 because we already solved 0 and 1
  for (var i = 2; i <= n; i++) {
    // the number of steps for n will be based on the sum of the number steps from i - 1 and i - 2
    // n = 2 => steps[1] + steps[0] = steps[2] = 2
    // n = 3 => steps[2] + steps[1] = steps[3] = 3
    // n = 4 => steps[3] + steps[2] = steps[4] = 5
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n];
};
