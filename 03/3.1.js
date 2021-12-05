let input = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
];

const findMode = (arr) => {
  return arr.sort((a,b) => 
    arr.filter(v => v===a).length
    - arr.filter(v => v===b).length)
    .pop()
}

const findGammaBinary = (input) => {
  let gammaRate = [];
  for (let i = 0; i < input[0].length; i++) {
    gammaRate.push(findMode(input.map(field => field[i])))
  }
  return gammaRate.join('')
}

const invertRate = (rate) => {
  result = []
  for (let i = 0; i < rate.length; i++) {
    switch (rate[i]) {
      case '1':
        result.push('0')
        break;
      default:
        result.push('1')
        break;
    }
  }
  return result.join('')
}

const calcPower = (input) => {
  let gamma = findGammaBinary(input)
  let epsilon = invertRate(gamma)
  const gRate = parseInt(gamma,2)
  const eRate = parseInt(epsilon,2)

  return eRate * gRate
}