/**
 * My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.
I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. 
All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

Recently, some customers have been complaining that people who placed orders after them are getting their food first. Yikes—that's not good for business!

To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
Each customer order (from either register) as it was finished by the kitchen. (servedOrders)
Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

We'll represent each customer order as a unique integer.

Ex:
Take Out Orders: [1, 3, 5]
Dine In Orders: [2, 4, 6]
Served Orders: [1, 2, 4, 6, 5, 3]
Would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

But,
Take Out Orders: [17, 8, 24]
Dine In Orders: [12, 19, 2]
Served Orders: [17, 8, 12, 19, 24, 2]
Would be first-come, first-served.

Note: Order numbers are arbitrary. They do not have to be in increasing order.
 */

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
    // these two idxs will help us iterate through both of the orders
    let takeOutIdx = 0;
    let dineInIdx = 0;

    for (let i = 0; i < servedOrders.length; i++) {
        // if the current order num from servedOrders is from takeOutOrders
            // we increment the idx so that we can check if it's first come first served
        if (servedOrders[i] === takeOutOrders[takeOutIdx]) {
            takeOutIdx++;
        } else if (servedOrders[i] === dineInOrders[dineInIdx]) {
            // same as with takeOutOrders
            dineInIdx++;
        } else {
            // if the current order num from servedOrders doesn't match the current order num from either takeOutOrders or dineInOrders
            return false;
        };
    };

    // in the case that takeOutOrders and dineInOrders still have order nums that aren't in servedOrders, we want to return false since it's not first come first served
    if (takeOutIdx !== takeOutOrders.length || dineInIdx !== dineInOrders.length) {
        return false;
    };

    return true;
};