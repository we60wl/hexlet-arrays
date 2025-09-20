// arrays.js
// Реализуйте и экспортируйте по умолчанию функцию get(), которая извлекает из массива элемент по указанному индексу, если в массиве такой индекс существует. Если индекс не существует, то функция должна вернуть значение по умолчанию. Исходный массив меняться не должен. Функция принимает на вход три аргумента:

// Массив
// Индекс
// Значение по умолчанию (равно null, если не задано)
const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined]
console.log(cities.length);
console.log(get(cities, 1)) // 'london'
console.log(get(cities, 4)) // ''
console.log(get(cities, 10, 'paris') )// 'paris'
console.log(get(cities, -1, 'oops')) // 'oops'
console.log(get(cities, 5, 'oops') )// null
console.log(get(cities, 6, 'oops') )// undefined
console.log(get(cities, 7) )// null
// Подсказки
// Для параметров функции можно указывать значения по умолчанию прямо при объявлении: (param = 'default value')
// Индекс не существует в том случае, если он выходит за рамки индексов массива, то есть не может быть меньше нуля или больше максимального индекса массива. Если массив пустой, то в нем не может быть индексов

function get(items, index, defaultValue = null) {
  if (index >= items.length || index < 0) {
    return defaultValue
  }

  return items[index]
}