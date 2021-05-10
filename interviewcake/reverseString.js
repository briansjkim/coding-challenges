// Write a function that takes an array of characters and reverses the letters in place

function reverse(arrayOfChars) {
    // nothing to reverse if the length is equal to or less than 1
    if (arrayOfChars.length <= 1) {
        return arrayOfChars;
    };

    let startIdx = 0;
    let endIdx = arrayOfChars.length - 1;

    while (startIdx < endIdx) {
        let temp = arrayOfChars[startIdx];
        arrayOfChars[startIdx] = arrayOfChars[endIdx];
        arrayOfChars[endIdx] = temp;
        startIdx++;
        endIdx--;
    };

    return arrayOfChars;
};

let input = 'ABCDE'.split('');
console.log(reverse(input)); // ['E', 'D', 'C', 'B', 'A'] => 'EDCBA'
