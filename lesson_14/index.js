const flatten = (coll) => {
  const result = []
  for (const item of coll) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        result.push(subItem)
      }
    } else {
      result.push(item)
    }
  }

  return result
}

console.log(flatten([3, 2, [], [3, 4, 2], 3, [123, 3]]))


// Пример выноса вложенного цикла в отдельную функцию

const append = (arr1, arr2) => {
  for (const item of arr2) {
    arr1.push(item)
  }
}

const flatten2 = (coll) => {
  let result = []
  for (const item of coll) {
    if (Array.isArray(item)) {
      append(result, item)
    } else {
      result.push(item)
    }
  }

  return result
}

console.log(flatten2([3, 2, [], [3, 4, 2], 3, [123, 3]]))