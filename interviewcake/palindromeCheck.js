/**
 * A string is a palindrome if it is read the same from forward or backward.
 * 
 * For example, dad reads the same either from forward or backward. So the word dad is a palindrome. Similarly, madam is also a palindrome.
 * 
 * NOTE:
 * Doesn't matter if the letters are uppercase or lowercase
 *      A and a are the same
 * Ignore whitespace
 * Ignore symbols
 */

function palindromeCheck(str) {
    let newStr = '';
    let i = 0;
    let j = newStr.length - 1;

    for (i; i < str.length; i++) {
        newStr += str[i].toLowerCase();
    };

    i = 0;
    while (i < j) {
        if (newStr[j] !== str[i]) {
            return false;
        };
    };

    return true;
};
