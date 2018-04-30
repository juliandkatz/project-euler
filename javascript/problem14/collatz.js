function loopSequences () {
  let longestLength = 0
  let longestValue = 0
  let sequence

  for (let i = 1; i < Math.pow(10, 6); i++) {
    sequence = makeSequence(i)
    if (sequence.length > longestLength) {
      longestLength = sequence.length
      longestValue = i
    }
  }

  return longestValue
}

function makeSequence (startNum) {
  const terms = [ startNum ]

  while (terms[terms.length - 1] !== 1) {
    terms.push(getNextTerm(terms[terms.length - 1]))
  }

  return terms
}

function getNextTerm (n) {
  const even = n % 2 === 0
  return even
    ? n / 2
    : 3 * n + 1
}

console.log('loopSequences ', loopSequences())
