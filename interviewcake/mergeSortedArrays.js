/**
 * In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
 * Each order is represented by an "order id" (an integer).
 * We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.
 * 
 * Ex:
 *  const myArray = [3, 4, 6, 10, 11, 15];
 *  const alicesArray = [1, 5, 8, 12, 14, 19];
 *  console.log(mergeArrays(myArray, alicesArray));
 *  // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
 */

function mergeArrays(myArray, alicesArray) {
    let mergedArray = [];
    // using these two as indices to iterate through both arrays
    let i = 0;
    let j = 0;

    while (i < myArray.length && j < alicesArray.length) {
        if (myArray[i] < alicesArray[j]) {
            mergedArray.push(myArray[i]);
            i++;
        } else {
            // if alicesArray has a num that is less than or EQUAL to a num in myArray
            // add it to the mergedArray
            mergedArray.push(alicesArray[j]);
            j++;
        };
    };

    // here, we want to make sure all nums from each array has been added to mergedArray
    while (i < myArray.length) {
        mergedArray.push(myArray[i]);
        i++;
    };

    while (j < alicesArray.length) {
        mergedArray.push(alicesArray[j]);
        j++;
    };

    return mergedArray;
};

