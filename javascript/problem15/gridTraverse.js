const ZEROS = '0000000000000000000000000000000000000000'
const GRID_SIZE = 20

function findNumOfValidPaths () {
  const highestValidPath = 1099510579200
  const lowestValidPath = 1048575
  let validPathCounter = 0
  
  for (let i = lowestValidPath; i <= highestValidPath; i++) {
    console.log(i)
    if (isValidSequence(i)) {
      // console.log('VALID')
      validPathCounter++
    }
  }

  return validPathCounter
}

function addZerosToString (numString) {
  if (typeof numString !== 'string') { throw new Error('Invalid numString in addZerosToString') }

  const extended = ZEROS + numString
  return extended.substring(extended.length - GRID_SIZE * 2, extended.length)
}

function toBinary (dec) {
  return (dec >>> 0).toString(2)
}

function isValidSequence (i) {
  const anyLengthPath = toBinary(i)
  const correctLengthPath = anyLengthPath.length === GRID_SIZE * 2
    ? anyLengthPath
    : addZerosToString(anyLengthPath)

  const pathArray = correctLengthPath.split('')

  if (pathArray.length % 2 !== 0) {
    throw new Error('uneven length sequence')
  }

  let countOne = 0
  let countZero = 0
  let value
  for (let i = 0; i < pathArray.length; i++) {
    pathArray[i] === '0' ? countZero++ : countOne++

    if (countOne > GRID_SIZE || countZero > GRID_SIZE) {
      return false
    }
  }

  return true
}

// console.log('isvalid ', isValidSequence(1048576))

console.log('valid paths ', findNumOfValidPaths())
