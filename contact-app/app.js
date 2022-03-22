const {questions, saveContact} = require('./contacts');
const main = async () => {
    const name = await questions('What is your name? ');
    const phoneNumber = await questions('Let me have your phone number so I can save it: ');

    saveContact(name, phoneNumber);
};
main();