const coll1 = [8, 9, 21, 19, 18, 22, 7]
calculateSum(coll1) // 48

const coll2 = [2, 0, 17, 3, 9, 15, 4]
calculateSum(coll2) // 27

function calculateSum(numbers) {
  if (numbers.length === 0) {
    return 0
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i+= 1) {
    const value = numbers[i]
    if (value % 3 === 0) {
      sum += value
    }
  }

  return sum
}