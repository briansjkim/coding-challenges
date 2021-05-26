/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */

// 112 ms, 39.3 MB memory
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        // we want to set j to i + 1 so that whenever j reaches the end of the array and i is incremented
        // j always starts at i + 1
        for (let j = i + 1; j < nums.length; j++) {
            // if nums[i] + nums[j] don't equal the target, continue iterating
            if (nums[i] + nums[j] === target) {
                return [i, j];
            };
        };
    };
};

// 76ms and 38.9 MB memory 
var twoSum = function(nums, target) {
    // create an obj to store the difference between target and each of the nums
    let storage = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        // if the difference is in the obj
        if (storage.hasOwnProperty(diff)) {
            // then we can leave the iteration and return the correct output
            return [storage[diff], i];
        } else {
            // but if the diff isn't in the obj
            // then we want to add the current integer into the obj and assign its value as its idx

            // we want to store the current integer because we are finding the difference between the target num and the current num in the beginning
            // and it wouldn't work if we stored the difference
            storage[nums[i]] = i;
        };
    };
};
