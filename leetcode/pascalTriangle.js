// given a non-negative integer numRows, generate the first numRows of Pascal's triangle

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
      if (j === 0 || j === i) {
        currRow.push(1);
      } else {
        currRow.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }
    triangle.push(currRow);
  }

  return triangle;
}
