const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf8')

let regEx1 = /(.*)(?=\n{2})/
let match = input.match(regEx1)

nums = match[0].split(",")

let regEx2 = /(?<=\n{2})(.+\n){5}/gm
let matches = [...input.matchAll(regEx2)]
let boards = matches.map(board => board[0])
boards = boards.map(board => board.split('\n'))
boards.forEach(board => board.pop(board.length - 1))

boards = boards.map(board => {
  return board.map(row => {
   return row.split(" ").filter(e => e)
  })
})

board = {...boards}

