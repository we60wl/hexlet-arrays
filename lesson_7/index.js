const userNames = ['petya', 'vasya', 'evgeny']

for (const name of userNames) {
  console.log(name);
}

const calculateSum = (coll) => {
  let sum = 0
  for (const value of coll) {
    sum += value
  }
  return sum
}