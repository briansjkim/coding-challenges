// Say you have an array for which the 'ith' element is the price of a given stock on day i
// if you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note: You cannot sell a stock before you buy one.

// Example:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5
// Note: 7 - 1 = 6, as selling price needs to be larger than buying price
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this case, no transaction is done because the max profit is 0


var maxProfit = function (prices) {
  var max = 0;

  for (var i = 0; i < prices.length; i++) {
    let buy = prices[i];
    for (var j = i + 1; j < prices.length; j++) {
      let sell = prices[j];
      let profit = sell - buy;
      if (profit > max) { max = profit; }
    }
  }
  return max;
}

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 4, 3, 2, 1]));
