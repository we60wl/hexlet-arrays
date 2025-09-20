// Реализуйте и экспортируйте функцию getWeekends(), которая возвращает массив из двух элементов – названий выходных дней на английском. Функция принимает на вход параметр – формат возврата. Всего есть два возможных значения:

// 'long' – вернётся массив, содержащий значения saturday и sunday. Это значение должно использоваться по умолчанию
// 'short' – вернётся массив со значениями sat и sun
// import { getWeekends } from '../dates.js'

// // Возвращаемое значение не демонстрируем, так как это равносильно ответу
console.log(getWeekends('long')) // Аналог вызова без аргументов (long — формат по умолчанию)
console.log(getWeekends('short') )// Вызов вернёт массив с короткими значениями

function getWeekends(type = 'long') {
  if (type === 'long') return ['saturday', 'sunday'];
  return ['sat', 'sun']
}

// TEACHER SOLUTION

export const getWeekends = (format = 'long') => {
  const longFormat = ['saturday', 'sunday']
  const shortFormat = ['sat', 'sun']

  switch (format) {
    case 'long':
      return longFormat
    case 'short':
      return shortFormat
    default:
      console.log('This is not supported format')
      break
  }
}