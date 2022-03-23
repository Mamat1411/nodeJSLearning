// const {questions, saveContact} = require('./contacts');
// const main = async () => {
//     const name = await questions('What is your name? ');
//     const phoneNumber = await questions('Let me have your phone number so I can save it: ');


//     saveContact(name, phoneNumber);
// };
// main();

//Simple Contact App with Different Approach(Data input using arguments in terminal)
const yargs = require("yargs");
const { saveContact, listContact, detailContact, deleteContact } = require("./contacts");
yargs.command({
    command : 'add',
    describe: 'Add New Contact',
    builder : {
        name  : {
            describe : "Full Name",
            demandOption : true,
            type : 'string'
        },
        email : {
            describe : "Email Address",
            demandOption : false,
            type : 'string'
        },
        phoneNumber : {
            describe : "Phone Number",
            demandOption : true,
            type : 'string'
        }
    },
    handler : function (argv) {
        saveContact(argv.name, argv.email, argv.phoneNumber);
    }
})
.demandCommand();

//Listing contact names and phone numbers
yargs.command({
    command : 'list',
    describe: "Listing Contact names and phone numbers",
    handler : function () {
        listContact();
    }
});

yargs.command({
    command : 'detail',
    describe: "Show a contact details based on name",
    builder : {
        name: {
            describe : "Full Name",
            demandOption : true,
            type : "string"
        }
    },
    handler(argv){
        detailContact(argv.name);
    }
});

yargs.command({
    command : 'delete',
    describe: "Delete A Contact" ,
    builder : {
        name: {
            describe : "Full Name",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        deleteContact(argv.name);
    }
});

yargs.parse();