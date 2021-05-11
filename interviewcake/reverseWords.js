/**
 * 
 * Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. 
 * The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.
 * Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.
 * 
 * 
 * Ex: const message = ['c','a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l'];
 * reverseWords(message);
 * console.log(message.join('')); => 'steal pound cake'
 */

function reverseWords(message) {
    // since the order of the words in message are all reversed, we want to reverse them so that they are in the right order
    reverse(message, 0, message.length - 1);

    let currStartIdx = 0;

    for (let i = 0; i <= message.length; i++) {
        let char = message[i];
        // we want to check if the idx is equal to the mesasge's length so that we can pass in the idx before the current idx
        if (char === ' ' || i === message.length) {
            reverse(message, currStartIdx, i - 1);
            currStartIdx = i + 1;
        };
    };
};

// this function will first be used to reverse all of the words and their order in the array
// then it'll be used to un-reverse each word
function reverse(message, startIdx, endIdx) {
    while (startIdx < endIdx) {
        let temp = message[startIdx];
        message[startIdx] = message[endIdx];
        message[endIdx] = temp;

        startIdx++;
        endIdx--;
    };
};

