// const {questions, saveContact} = require('./contacts');
// const main = async () => {
//     const name = await questions('What is your name? ');
//     const phoneNumber = await questions('Let me have your phone number so I can save it: ');


//     saveContact(name, phoneNumber);
// };
// main();

//Simple Contact App with Different Approach(Data input using arguments in terminal)
const yargs = require("yargs");
const { saveContact } = require("./contacts");
yargs.command({
    command : 'add',
    describe: 'Add New Contact',
    builder : {
        name  : {
            describe : "Full Name",
            demandOption : true,
            type : 'string',
        },
        email : {
            describe : "Email Address",
            demandOption : false,
            type : 'string',
        },
        phoneNumber : {
            describe : "Phone Number",
            demandOption : true,
            type : 'string',
        }
    },
    handler : function (argv) {
        saveContact(argv.name, argv.email, argv.phoneNumber);
    }
});
yargs.parse();