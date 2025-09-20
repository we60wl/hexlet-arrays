// Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть:

// import { swap } from '../arrays'

swap([]) // []
swap([1]) // [1]
swap([1, 2]) // [2, 1]
swap(['one', 'two', 'three']) // ['three', 'two', 'one']
// Подсказки
// Чтобы поменять местами значения, нужно использовать дополнительную переменную
function swap(array) {
  if (array.length > 0) {
    const temporary = array.at(-1)
    array[array.length - 1] = array.at(0)
    array[0] = temporary
  }

  return array
}


// Teacher solution

export const swap = (items) => {
  if (items.length < 2) {
    return items
  }
  const lastIndex = items.length - 1
  const last = items[lastIndex]
  items[lastIndex] = items[0]
  items[0] = last

  return items
}