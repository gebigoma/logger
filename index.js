const
  chalk = require('chalk'),
  fs = require('fs')

// console.log(chalk.blue("Hello World!"))

var poem = "Somewhere over the rainbow.."

// ie. for server logs
fs.appendFile('poetry.txt', poem + "\n", function(err) {
  // when using only if statement with no else write one line
  if(err) console.log(err)
})