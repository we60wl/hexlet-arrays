const names = ['john', 'smith', 'karl']

const newNames = addPrefix(names, 'Mr')
console.log(newNames)
// => ['Mr john', 'Mr smith', 'Mr karl'];

console.log(names) // Старый массив не меняется!
// => ['john', 'smith', 'karl'];

function addPrefix(users, prefix) {
  let result = []
  for (let i = 0; i < users.length; i += 1) {
    const userName = users[i]

    const userWithPrefix = `${prefix} ${userName}`
    result[i] = userWithPrefix
  }
  return result
}

// teacher solution

export default (coll, prefix) => {
  const result = []

  for (let i = 0; i < coll.length; i += 1) {
    result[i] = `${prefix} ${coll[i]}`
  }

  return result
}