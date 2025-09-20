const bubbleSort = (coll) => {
  let stepsCount = coll.length - 1
  let swapped
  do {
    swapped = false
    for (let i = 0; i < stepsCount; i+= 1) {
      if (coll[i] > coll[i + 1]) {
        const temp = coll[i]
        coll[i] = coll[i + 1]
        coll[i + 1] = temp

        swapped = true
      }
    }
    stepsCount -= 1
  } while (swapped)

  return coll
}

console.log(bubbleSort([3, 2, 10, -2, 0])) // => [ -2, 0, 2, 3, 10 ]


const myBubbleSort = (coll) => {
  let stepsCount = coll.length - 1
  // Объявляем переменную swapped, значение которой показывает,
  // был ли совершен обмен элементов во время перебора массива
  let swapped
  do {
    swapped = false
    for (let i = 0; i < stepsCount; i += 1) {
      if (coll[i] > coll[i + 1]) {
        const temp = coll[i]
        coll[i] = coll[i + 1]
        coll[i + 1] = temp

        swapped = true
      }
    }
    stepsCount -= 1
  } while (swapped)

  return coll
}

console.log(myBubbleSort([3, 2, 10, -2, 0])) // => [ -2, 0, 2, 3, 10 ]