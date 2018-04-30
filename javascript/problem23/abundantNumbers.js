const abundantSums = []

function getProperDivisors (number) {
  const divisors = [1]

  for (let x = 2; x < Math.ceil(Math.sqrt(number)); x++) {
    let divided = number / x
    if (isWholeNumber(divided)) {
      divisors.push(divided, x)
    }
  }

  return divisors
}

function isWholeNumber (number) {
  return Math.ceil(number) === Math.floor(number)
}

function isAbundant (number) {
  return getSumOfArray(getProperDivisors(number)) > number
}

function getSumOfArray (numArray) {
  let sum = 0
  numArray.forEach(num => { sum += num })
  return sum
}

let a, b
outerLoop: for (let x = 1; x < 28123; x++) {
  console.log('x ', x)

  for (a = 12; a < x - 24; a++) {
    b = x - a

    if (isAbundant(a) && isAbundant(b)) {
      continue outerLoop
    }
  }

  abundantSums.push(x)
}

console.log(abundantSums)
