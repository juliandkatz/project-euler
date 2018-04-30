const bigInt = require('big-integer')

const digitString = bigInt(2).pow(1000).toString()

let sum = 0
digitString.split('').forEach(digit => {
  sum += Number(digit)
})

console.log('sum ', sum)
