// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:
// I: [7, 1, 5, 3, 6, 4]
// O: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (prices = 5), profit = 5 - 1 = 4
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6 -3 = 3
// Then 4 + 3 = 7

// Example 2:
// I: [1, 2, 3, 4, 5]
// O: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5 - 1 = 4
// Can't buy on day 1, buy on day 2, and sell them later since that's engaging in multiple transactions at the same time. Must sell stock before buying again

// Example 3:
// I: [7, 6, 4, 3, 1]
// O: 0
// Explanation: In this case, no transaction is done because there's no max profit

// Example 4:
// I: [1, 4, 2, 5, 9]
// O: 10
// Explanation: Buy on day 1 (price = 1) and sell on day 2 (price = 4), profit = 4 - 1 = 3
// Buy on day 3 (price = 2) and sell on day 4 (price = 5), profit = 5 - 2 = 3
// Buy on day 4 (price = 5) and sell on day 5 (price = 9), profit = 9 - 5 = 4
// Then 3 + 3 + 4 = 10

// approach:
// create a variable to hold the max profit - 'max'
// iterate through the input 'prices'
// check if the price at current index + 1 is greater than the price at the current index
// if it is
// add the difference to the max
// return 'max'

const maxProfit = function (prices) {
  var max = 0;

  for (var i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      max += prices[i + 1] - prices[i];
    }
  }
  return max;
}
