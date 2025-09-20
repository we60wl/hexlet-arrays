// Агрегация
const calculateMax = (coll) => {
  // Если коллекция пустая, то у неё не может быть максимального значения
  // в подобных ситуациях принято возвращать null
  // Это классический пример использования идиомы guard expression
  if (coll.length === 0) {
    return null
  }

  let max = coll[0]

  for (let i = 1; i < coll.length; i += 1) {
    const currentEl = coll[i]

    if (currentEl > max) {
      max = currentEl
    }
  }

  return max
}

// Нейтральный элемент

const calculateSum = (coll) => {
  let sum = 0
  for (let i = 0; i < coll.length; i += 1) {
    sum += coll[i]
  }

  return sum
}