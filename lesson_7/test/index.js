const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5]
calculateAverage(temperatures1) // 38.5

const temperatures2 = [36, 37.4, 39, 41, 36.6]
calculateAverage(temperatures2) // 38

function calculateAverage(averages) {
  if (averages.length === 0) {
    return null
  }

  let result = 0
  for (const average of averages) {
    result += average
  }

  return result / averages.length
}