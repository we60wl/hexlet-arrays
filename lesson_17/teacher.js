const openingSymbols = ['(', '[', '{', '<']
const closingSymbols = [')', ']', '}', '>']

const isOpeningSymbol = symbol => openingSymbols.includes(symbol)
const getClosingSymbolFor = (symbol) => {
  for (let i = 0; i < closingSymbols.length; i += 1) {
    if (openingSymbols[i] === symbol) {
      return closingSymbols[i]
    }
  }
  return null
}

function isBracketStructureBalanced(str) {
  const stack = []
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol)
      stack.push(closingSymbol)
    } else {
      const lastSavedSymbol = stack.pop()
      if (symbol !== lastSavedSymbol) {
        return false
      }
    }
  }

  return stack.length === 0
}

isBracketStructureBalanced('(>') // false
isBracketStructureBalanced('()') // true
isBracketStructureBalanced('[()]') // true
isBracketStructureBalanced('({}[])') // true
isBracketStructureBalanced('{<>}}') // false
isBracketStructureBalanced('([)]') // false