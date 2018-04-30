function isAbundant (number) {
  const divisors = [1]
  let divisorSum = 1
  let oppositeDivisor

  for (let i = 2; i < Math.ceil(Math.sqrt(number)); i++) {
    if (number % i > 0) { continue }

    oppositeDivisor = number / i

    if (divisors.indexOf(i) < 0) {
      divisors.push(i)
      divisorSum += i
    }

    if (divisors.indexOf(oppositeDivisor) < 0) {
      divisors.push(oppositeDivisor)
      divisorSum += oppositeDivisor
    }

    if (divisorSum > number) {
      console.log(`ABUNDANT: ${number} -- ${divisors}`)
      return true
    }
  }

  return false
}

function isSumOfTwoAbundants (number, abundantNumbers) {
  if (number < 12) { return false }

  let currentAbundant, oppositeAdditor
  let flipArraySearchOrder
  for (let i = 0; i < abundantNumbers.length; i++) {
    currentAbundant = abundantNumbers[i]
    oppositeAdditor = number - currentAbundant
    flipArraySearchOrder = false

    if (number < currentAbundant) {
      return false
    }

    if (oppositeAdditor < 12) {
      return false
    }

    if (i > abundantNumbers.length / 2) {
      flipArraySearchOrder = true
    }

    if (orderedIndexOf(abundantNumbers, oppositeAdditor, flipArraySearchOrder) > -1) {
      return true
    }
  }

  return false
}

function orderedIndexOf (array, term, backwards = false) {
  let currentValue

  if (!backwards) {
    for (let a = 0; a < array.length; a++) {
      currentValue = array[a]

      if (currentValue === term) {
        return a
      }

      if (currentValue > term) {
        return -1
      }
    }
  } else {
    for (let b = array.length - 1; b > -1; b--) {
      currentValue = array[b]

      if (currentValue === term) {
        return b
      }

      if (currentValue < term) {
        return -1
      }
    }
  }

  return -1
}

// first, generate all the abundant numbers up to a certain point

const abundantNumbers = []

for (let a = 11; a < 28112; a++) {
  if (isAbundant(a)) {
    abundantNumbers.push(a)
  }
}

let SumOfSumsOfNonAbundants = 0

for (let b = 1; b < 28123; b++) {
  if (!isSumOfTwoAbundants(b, abundantNumbers)) {
    console.log('HIT: ', b)
    SumOfSumsOfNonAbundants += b
  }
}

console.log(SumOfSumsOfNonAbundants)
console.log(isSumOfTwoAbundants(28123, abundantNumbers))
