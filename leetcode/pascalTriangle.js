// given a non-negative integer numRows, generate the first numRows of Pascal's triangle
// in Pascal's triangle, each number is the sum of the two numbers directly above it

// Example:
// Input: 5
// Output: [ [1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1] ]
// Example 2:
// Input: 7
// Output: [ [1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1] ]


var generate = function (numRows) {
  if (numRows === 0 || !numRows) { return []; }

  const triangle = [];

  for (var i = 0; i < numRows; i++) {
    let currRow = [];
    for (var j = 0; j <= i; j++) {
      // if j === 0, this indicates the beginning which should always be 1
      // if j === i, this indicates the end which should always be 1
      if (j === 0 || j === i) {
        currRow.push(1);
      } else { // if j doesn't equal 0 or i
        // get the last row from triangle which is i - 1
        // then get the first number from the last row which is j - 1
        // get the last row from triangle which is i - 1
        // then get the last number from the last row which is j
        // then add them together
        currRow.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }
    triangle.push(currRow);
  }

  return triangle;
}
