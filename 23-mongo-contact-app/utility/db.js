const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/dbEmployee');

//Creating Schema (These lines of codes will be moved to ./models/contact.js once the database is successfully connected)
// const Contact = mongoose.model('Contact', {
//     name: {
//         type: String,
//         required: true,
//     },
//     phone: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//     }
// });

// //Generating A Data (can be deactivated once the data is successfully generated)
// const contact1 = new Contact({
//     name: 'Muhammad Mujahid',
//     phone: '081913036646',
//     email: 'muhammadmujahid14@gmail.com'
// });

// //Store The Generated Data into A Collection
// contact1.save()
//     .then((contact) => {
//         console.log(contact);
//     }).catch((err) => {
//         console.log(err);
//     });