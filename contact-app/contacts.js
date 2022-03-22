const { error } = require('console');
const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({input, output});

if (!fs.existsSync('./contacts.json')) {
    fs.writeFileSync('contacts.json', '[]', 'utf-8');
}

const questions = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (name) => {
            resolve(name);
        });
    });
};

const saveContact = (name, phoneNumber) => {
    const contact = {name, phoneNumber};
    const file = fs.readFileSync('contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync('contacts.json', JSON.stringify(contacts));
    console.log(`Thank you ${name} for letting me have your phone number ${phoneNumber}`);
    rl.close();
};

module.exports = { questions, saveContact };