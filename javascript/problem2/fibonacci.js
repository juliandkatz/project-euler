let first = 1
let second = 1
let temp = 0
let sum = 0

while (temp < 4000000) {
  temp = first + second 

  if (temp % 2 === 0) {
    sum += temp
  }

  first = second
  second = temp
}

console.log('sum ', sum)
