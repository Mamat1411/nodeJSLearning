const { error } = require('console');
const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({input, output});

rl.question('What is your name? ', (name) => {
    rl.question('Let me write your number for my contacts ', (number) => {
        const contact = {name, number};
        const file = fs.readFileSync('7-node-core-modules/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);
        contacts.push(contact);
        fs.writeFileSync('7-node-core-modules/contacts.json', JSON.stringify(contacts));
        console.log(`Thank you ${name} for letting me have your number ${number}`);
        rl.close();
    });
});