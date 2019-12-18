// given an image represented by an NxN matrix
// where each pixel in the image is presented by an integer
// write a method to rotate the image by 90 degrees
// can you do this in place?

//i: NxN matrix
//o: NxN matrix (rotated 90 degrees)
//c: rotate matrix in place
//e: empty matrix

// time complexity: O(N^2) linear because you're just looking at each item ONCE
// space complexity: O(2) -- contant

var rotateMatrix = (m) => {
  let n = m.length;

  for (var i = 0; i < Math.floor(n / 2); i++) {
    for (var j = 0; j < n - (2 * i) - 1; j++) {
      let temp = m[i+j][n - 1- i]; // B
      m[i + j][n - 1 - i] = m[i][i + j]; // B = A
      m[i][i + j] = temp; // A = B

      temp = m[n - 1 - i][n - 1 - i - j]; // C
      m[n - 1 -i][n - 1 -i -j] = m[i][i + j]; // C = A
      m[i][i + j] = temp; // A = C

      temp = m[n - 1- i - j][i]; //D
      m[n - 1- i - j][i] = m[i][i + j]; // D = A
      m[i][i + j] = temp; // A = D
    }
  }
  return m;
}

// console.log(rotateMatrix([ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16] ]));
