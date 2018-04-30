const filePath = true ? './triangle.txt' : './testData.txt'
const triangleString = require('fs').readFileSync(filePath).toString()
const twoDimArray = stringToArrays(triangleString)

let greatestSum = 0

function dive(structure, index, sum) {
  const row = structure[0]
  const remainingStructure = structure.slice(1, structure.length)

  if (!row) {
    if (sum >= greatestSum) { greatestSum = sum }
    return null
  }

  return dive(remainingStructure, index, sum + Number(row[index]))
    || dive(remainingStructure, index + 1, sum + Number(row[index]))
}

dive(twoDimArray, 0, 0, 0)

console.log('greatestSum ', greatestSum)

function stringToArrays (fileString) {
  const linesArray = fileString.split('\n')
  const cleanLinesArray = linesArray.slice(0, linesArray.length - 1)
  return cleanLinesArray.map(line => line.split(' '))
}
