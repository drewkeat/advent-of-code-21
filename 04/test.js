const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf8')

let regEx = /(.*)(?=\n{2})/
let match = input.match(regEx)

nums = match[0].split(",")
regEx = /(?<=\n{2})(.+\n){5}/gm
let matches = input.matchAll(regEx)
matches = [...input.matchAll(regEx)]
console.log(matches[0][0])
console.log(matches[1][0])
console.log(matches[2][0])
let boards = matches.map(board => board[0])