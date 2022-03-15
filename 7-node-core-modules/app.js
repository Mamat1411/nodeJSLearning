//Core Modules
//File System
const { error } = require('console');
const fs = require('fs');

//Writing string to file (synchronous)
// try {
//     fs.writeFileSync('7-node-core-modules/testSync.txt', 'Hello World! (Synchronous)');
// } catch (error) {
//     console.log(error);
// }

//Writing string to file (asynchronous)
// fs.writeFile('7-node-core-modules/testAsync.txt', 'Hello World! (Async)', (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log('The File has been saved');
// });

//Reading Files (sync)
// console.log(fs.readFileSync('7-node-core-modules/testSync.txt', 'utf-8'));

//Reading Files (async)
// const fileToRead = fs.readFile('7-node-core-modules/testAsync.txt', 'utf-8', (error, data) => {
//     if (error) {
//         throw error;
//     }
//     console.log(data);
// });

//Readline Core Module
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({input, output});

rl.question('What do you think of Node.js? ', (answer) => {
    rl.question('What is your name? ', (name) => {
        console.log(`Thank you ${name} for your valuable feedback: ${answer}`);
        rl.close();
    });
});
