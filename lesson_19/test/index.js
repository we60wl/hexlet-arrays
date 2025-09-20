const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1
  const ys = y2 - y1

  return Math.sqrt(xs ** 2 + ys ** 2)
}

// BEGIN
export const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) {
    return null
  }

  let [nearestLocation] = locations
  const [, nearestPoint] = nearestLocation
  let lowestDistance = getDistance(currentPoint, nearestPoint)

  for (const location of locations) {
    const [, point] = location
    const distance = getDistance(currentPoint, point)
    if (distance < lowestDistance) {
      lowestDistance = distance
      nearestLocation = location
    }
  }

  return nearestLocation
}

const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
]

const currentPoint = [5, 5]

// Если мест нет, то возвращается null
getTheNearestLocation([], currentPoint) // null

getTheNearestLocation(locations, currentPoint) // ['Museum', [8, 4]]