const bigInt = require("big-integer")

function factorial (input) {
  let product = bigInt(1)

  for (let x = 1; x <= input; x++) {
    product = product.times(x)
  }

  return product.toString()
}

function sumDigits (numberString) {
  let sum = 0

  for (x = 0; x < numberString.length; x++) {
    sum += Number(numberString.charAt(x))
  }

  return sum
}

console.log(sumDigits(factorial(100)))
