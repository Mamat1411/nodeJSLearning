//Core Modules
//File System
const fs = require('fs');

//Writing string to file (synchronous)
try {
    fs.writeFileSync('7-node-core-modules/testSync.txt', 'Hello World! (Synchronous)');
} catch (error) {
    console.log(error);
}