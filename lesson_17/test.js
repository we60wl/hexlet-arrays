const openingSymbols = ['(', '[', '{', '<']
const closingSymbols = [')', ']', '}', '>']

// BEGIN (write your solution here)
function isBracketStructureBalanced(expression) {
  const stack = [];
  for (const char of expression) {
    if (openingSymbols.includes(char)) {
      stack.push(char);
    } else {
      const closingIdx = closingSymbols.indexOf(char);
      if (closingIdx !== -1) {
        if (stack.length === 0) return false;
        const lastOpen = stack.pop();
        if (openingSymbols.indexOf(lastOpen) !== closingIdx) return false;
      }
    }
  }
  return stack.length === 0;
}

isBracketStructureBalanced('(>') // false
isBracketStructureBalanced('()') // true
isBracketStructureBalanced('[()]') // true
isBracketStructureBalanced('({}[])') // true
isBracketStructureBalanced('{<>}}') // false
isBracketStructureBalanced('([)]') // false