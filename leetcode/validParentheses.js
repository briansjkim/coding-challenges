// given a string containing just the characters '(', ')', '{', '}', '[', ']' and determine if the input string is valid
// an input string is valid if:
  // open brackets must be closed by the same type of brackets
  // open brackets must be closed in the correct order
// an empty string is also considered valid

var validParentheses = (string) => {
  if (string.length === 0)  return true;

  // parens will be a stack
  var parens = [];

  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      parens.push(')')
    } else if (string[i] === '[') {
      parens.push(']');
    } else if (string[i] === '{') {
      parens.push('}');
    } else if (string[i] !== parens.pop()) {
      return false;
    }
  }
  if (parens.length === 0) {
    return true;
  }
  return false;
};

console.log(validParentheses('')); // true
console.log(validParentheses('()')); // true
console.log(validParentheses('()[]{}')); // true
console.log(validParentheses('(]')); // false
console.log(validParentheses('([)]')); // false
console.log(validParentheses('{[]}')); // true