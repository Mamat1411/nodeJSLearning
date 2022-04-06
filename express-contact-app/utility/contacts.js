const { error } = require('console');
const fs = require('fs');

if (!fs.existsSync('./contacts.json')) {
    fs.writeFileSync('contacts.json', '[]', 'utf-8');
}

const loadContact = () => {
    const file = fs.readFileSync('contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    return contacts;
};