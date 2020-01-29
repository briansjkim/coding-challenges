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
