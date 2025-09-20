const names = ['john', 'smith', 'karl']

reverse(names)
console.log(names) // => ['karl', 'smith', 'john']

reverse(names)
console.log(names) // => ['john', 'smith', 'karl']

function reverse(names) {
  return names.reverse();
}