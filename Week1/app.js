const {sum, substract, div, multi} = require("./math.js")

const userInput = [20, 10]

//const result = sum(20, 20)
console.log(sum(userInput[0], userInput[1]))
console.log(substract(userInput[0],userInput[1]))
console.log(multi(userInput[0], userInput[1]))
console.log(div(userInput[0], userInput[1]))