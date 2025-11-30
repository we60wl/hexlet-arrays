const names = ['john', 'smith', 'karl', 'john']

const unique = (coll) => {
  const init = []
  return coll.reduce((acc, current) => {
    if (acc.includes(current)) {
      return acc
    }
    return [...acc, current]
  }, init)
}
console.log(unique(names))

reverse(names)
console.log(names) // => ['karl', 'smith', 'john']

reverse(names)
console.log(names) // => ['john', 'smith', 'karl']

function reverse(names) {
  return names.reverse();
}


