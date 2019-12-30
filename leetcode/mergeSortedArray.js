// given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array
// the number of elements initialized in nums1 and nums2 are m and n respectively
// you may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2

var merge = (nums1, m, nums2, n) => {
  // want to access the last el in nums1 to make swaps
  var len = nums1.length - 1;
  // decrement both m and n to get the last el in both arrays
  m--;
  n--;

  while (n >= 0) {
    // if nums1[m] is greater than nums2[n]
    if (nums1[m] > nums2[n]) {
      // place nums1[m] at the very back
        // since it's the last el in both arrays, if the condition is true
          // nums1[m] is the greatest int between the two arrays
      nums1[len] = nums1[m];
      // decrement m to get the next el
      m--;
    } else {
      // if nums1[m] is less than nums2[n]
      // place nums2[n] at the very back
        // same reasoning as above
      nums1[len] = nums2[n];
      // decrement n to get the next el
      n--;
    }
    // decrement len to get to the next 'empty' spot
    len--;
  }

  return nums1;
}

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1, 4, 7, 8, 0, 0, 0], 4, [2, 5, 9], 3));
