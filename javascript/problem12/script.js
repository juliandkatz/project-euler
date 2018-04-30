function getDivisors (number) {
  var divisors = [1, number]
  for (var x = 2; x < Math.sqrt(number); x++) {
    if (number % x === 0) {
      divisors.push(x)
      divisors.push(number / x)
    }
  }

  return divisors
}

function main () {
  var index = 3
  var triangularSum = 3

  while (getDivisors(triangularSum).length < 500) {
    triangularSum += index
    index++
    if (getDivisors(triangularSum).length >= 500) {
      console.log('sum ', index, triangularSum, getDivisors(triangularSum).length)
    }
  }

  console.log('currentValue ', triangularSum)
}

// function test () {
//   console.log('getDivisors ', getDivisors(1))
//   console.log('getDivisors ', getDivisors(3))
//   console.log('getDivisors ', getDivisors(6))
//   console.log('getDivisors ', getDivisors(10))
//   console.log('getDivisors ', getDivisors(15))
//   console.log('getDivisors ', getDivisors(21))
//   console.log('getDivisors ', getDivisors(28))
// }
//
// test()
main()
