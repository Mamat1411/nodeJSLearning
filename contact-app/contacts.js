const { error } = require('console');
const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');
// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');

// const rl = readline.createInterface({input, output});

if (!fs.existsSync('./contacts.json')) {
    fs.writeFileSync('contacts.json', '[]', 'utf-8');
}

// const questions = (question) => {
//     return new Promise((resolve, reject) => {
//         rl.question(question, (name) => {
//             resolve(name);
//         });
//     });
// };

const loadContact = () => {
    const file = fs.readFileSync('contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    return contacts;
};

const saveContact = (name, email, phoneNumber) => {
    const contact = {name, email, phoneNumber};
    const contacts = loadContact();
    //Duplicate data validation
    const duplicate = contacts.find((contact) => contact.name === name);
    if (duplicate) {
        console.log(
            chalk.red.bold('I have added you to my contact list')
        );
        return false;
    }

    //Email Validation
    if (email) {
        if (!validator.isEmail(email)) {
            console.log(
                chalk.red.bold('Invalid Email Format')
            );
            return false;
        }
    }
    
    //Phone Number Validation
    if (!validator.isMobilePhone(phoneNumber,'id-ID')) {
        console.log(
            chalk.red.bold('Invalid Phone Number Format')
        );
        return false;
    }
    
    contacts.push(contact);
    fs.writeFileSync('contacts.json', JSON.stringify(contacts));
    console.log(chalk `{green Thank you ${name} for letting me have your email ${email} and your phone number ${phoneNumber}}`);
    // rl.close();
};

const listContact = () => {
    console.log(chalk.yellow("Contact List:"));
    const contacts = loadContact();
    contacts.forEach((contact, i) => {
        console.log(`${i+1}. ${contact.name} - ${contact.phoneNumber}`);
    });
};

const detailContact = (name) => {
    const contacts = loadContact();
    const contact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());

    //If Name Not Found
    if (!contact) {
        console.log(chalk.red.bold(`${name} Not Found`));
        return false;
    }

    console.log(chalk.green.bold(contact.name));
    console.log(contact.phoneNumber);
    if (contact.email) {
        console.log(contact.email);
    }
};

const deleteContact = (name) => {
    const contacts = loadContact();
    const undeleted = contacts.filter((contact) => contact.name.toLowerCase() !== name.toLowerCase());

    //If name not found
    if (contacts.length === undeleted.length) {
        console.log(chalk.red.bold(`${name} Not Found`));
        return false;
    }

    fs.writeFileSync('contacts.json', JSON.stringify(undeleted));
    console.log(chalk.green.bold(`${name}'s Contact is Successfully Deleted`));
};

// module.exports = { questions, saveContact };
module.exports = { saveContact, listContact, detailContact, deleteContact };