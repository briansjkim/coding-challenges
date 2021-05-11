/**
 * Write a program that prints the numbers from 1 to 100. 
 * But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
 * 
 * BONUS:
 * For multiples of 4, print 'Foo'. For multiples of 8, print 'Bar'
 */

function FizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        };
    };
};

// using object to store conditions
function FizzBuzz() {
    // store all the conditions inside an object
    const conditions = {3: 'Fizz', 5: 'Buzz', 15: 'FizzBuzz'};

    for (let i = 1; i <= 100; i++) {
        // create a variable to store the value for each multiple. necessary for next step
        let answer = null;
        for (let key in conditions) {
            if (i % key === 0) {
                // don't print the value when it's first found
                // this is bc objects order numbers in ascending order, so if a number is a multiple of both 5 and 3, the value that will be printed will be 3 since it's true
                // to make sure that this doesn't happen, we let the answer be updated IF necessary
                // Ex: i = 15. Since 15 % 3 === 0 is true, 3 will be stored in answer first
                    // but as the iteration continues, 5 will be stored next THEN 15 which is what we really want
                answer = conditions[key];
            };
        };

        // if answer has a value stored, print it
        if (answer !== null) {
            console.log(answer);
        };
        // if none of the keys are multiples of i, then we just print i
        console.log(i);
    };
};
