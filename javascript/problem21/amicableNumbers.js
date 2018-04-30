const foundNumbers = []
let sum = 0

function wasAlreadyFound (number) {
  return foundNumbers.includes(number)
}

function isAmicable (number) {
  if (wasAlreadyFound(number)) { return false }

  const numberPartner = sumArray(getProperDivisors(number))
  const numberPartnerDivisorSum = sumArray(getProperDivisors(numberPartner))

  if (number === numberPartnerDivisorSum && number !== numberPartner) {
    if (!wasAlreadyFound(number)) {
      foundNumbers.push(number)
      sum += number
    }
    if (!wasAlreadyFound(numberPartner)) {
      foundNumbers.push(numberPartner)
      sum += numberPartner
    }
    return true
  } else {
    return false
  }
}

function getProperDivisors (number) {
  const divisors = [1]
  let dividend

  for (let x = 2; x < Math.ceil(Math.sqrt(number)); x++) {
    dividend = number / x
    if (Math.ceil(dividend) === Math.floor(dividend)) {
      divisors.push(x, dividend)
    }  
  }

  return divisors
}

function sumArray (numArray) {
  let sum = 0
  numArray.forEach(num => sum += num)
  return sum
}

function main () {
  for (let x = 1; x < 10000; x++) {
    isAmicable(x)
  }

  console.log('SUM ', sum)
}

main()
