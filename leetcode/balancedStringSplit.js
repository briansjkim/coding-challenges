/**
 * Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

    Given a balanced string s, split it in the maximum amount of balanced strings.

    Return the maximum amount of split balanced strings.

    Ex 1:
    i: s = 'RLRRLLRLRL'
    o: 4
    'RL', 'RRLL', 'RL', 'RL'

    Ex 2:
    i: s = 'RLLLLRRRLR'
    o: 3
    'RL', 'LLLRRR', 'LR'

    Ex 3:
    i: s = 'LLLLRRRR';
    o: 1
    'LLLLRRRR';

    Ex 4:
    i: s = 'RLRRRLLRLL'
    o: 2
    'RL', 'RRRLLRLL'
 */

var balancedStringSplit = function(s) {
    let count = 0;
    let rCount = 0;
    let lCount = 0;

    if (s.length === 1) {
        return 'Not balanced';
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            rCount++;
        } else {
            lCount++;
        };

        if (rCount === lCount) {
            count++;
            rCount = 0;
            lCount = 0;
        };
    };
    return count;
};

// runtime: 68ms, memory usage: 38.1MB