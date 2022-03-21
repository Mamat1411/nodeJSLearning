const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('muhammadmujahid14@gmail.com'));
// console.log(validator.isMobilePhone('081913036646', 'id-ID'));
// console.log(validator.isNumeric('081913036646'));

console.log(chalk.bold('Hello World'));
const name = "Muhammad";
const message = chalk `Lorem ipsum dolor {bgRed.black sit amet} consectetur {bgGreen.black adipisicing} elit. Aliquid non amet debitis possimus aut commodi! My Name is {bgBlue.black ${name}}`;
console.log(message);