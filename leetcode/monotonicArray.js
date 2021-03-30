/**
 * An array is monotonic if it is either monotone increasing or monotone decreasing.
 * 
 * An array A is monotone increasing if for all i <= j; A[i] <= A[j]. An array A is monotone decreasing if for all i <= j, A[i] >= A[j]
 * 
 * Return true if and only if the given array A is monotonic
 * 
 * Ex 1) 
 * I: [1, 2, 2, 3]
 * O: true
 * 
 * Ex 2:
 * I: [6, 5, 4, 4]
 * O: true
 * 
 * Ex 3:
 * I: [1, 3, 2]
 * O; [false]
 * 
 * Ex 4:
 * i: [1, 2, 4, 5]
 * o: true
 * 
 * Ex 5:
 * i: [1, 1, 1]
 * o: true
 */

var isMonotonic = function(A) {
    let increase = true;
    let decrease = true;

    for (let i = 1; i < A.length; i++) {
        // if A[i] is less than A[i - 1], that means it is not increasing and COULD be decreasing
        if (A[i] < A[i - 1]) {
            increase = false;
        } else if (A[i] > A[i - 1]) {
            // if A[i] is greater than A[i - 1], that means it is not decreasing and COULD be increasing
            decrease = false;
        } else {
            continue;
        };
    };

    return increase || decrease;
}
