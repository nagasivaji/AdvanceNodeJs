const validator = require('validator')
    // const utils = require('./utils')

// console.log(utils.myName)
// console.log(utils.getFullName())

// To init npm in our project use npm intt in root project directory

// Validating Email using validator npm module
console.log(validator.isEmail('sivaji'))
console.log(validator.isEmail('sivaji@gmail.com'))

// Taking input from user using cmdline

console.log('Actual input array: ', process.argv)
console.log('Required Input from terminal: ', process.argv.slice(2))