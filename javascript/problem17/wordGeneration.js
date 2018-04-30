const wordBank = {
  1: {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  },
  'irregulars': {
    0: 'ten',
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen'
  },
  10: {
    2: 'twenty',
    3: 'thirty',
    4: 'fourty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  },
  100: {

  }
}

let charCount = 0
let onesPlace,
  tensPlace,
  numString,
  hasTens,
  isIrregular,
  tenSelector,
  oneSelector

for (let i = 1; i <= 20; i++) {
  iString = i.toString()
  hasTens = iString.length >= 2
  isIrregular = i > 9 && i < 20

  onesPlace = (!isIrregular && wordBank[1][i % 10]) || ''

  tenSelector = isIrregular ? 'irregulars' : Math.floor(i / 10) * 10
  tensPlace = hasTens ? wordBank[tenSelector][i % 10] : ''

  numString = `${tensPlace}${onesPlace}`
  console.log('i ', i, numString) 
}
