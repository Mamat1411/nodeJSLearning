const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact } = require('./utility/contacts.js');
const app = express();
const port = 3000;

//using EJS
app.set('view engine', 'ejs');

//Third-Party Middleware
//using EJS Layouts Module
app.use(expressLayouts);

//Built-In Middleware
app.use(express.static('public'));

app.get('/', (request, response) => {
    const employee = [
        {
            name : 'Muhammad Mujahid',
            email: 'muhammadmujahid14@gmail.com'
        },
        {
            name : 'Muhammad',
            email: 'muhammad@gmail.com'
        },
        {
            name : 'Mamat',
            email: 'mamat@gmail.com'
        }
    ];
    response.render('index', {
        name : 'Muhammad Mujahid',
        title: 'Express JS Home',
        employee,
        layout: 'layouts/main'
    });
});

app.get('/about', (request, response) => {
    response.render('about', {
        title: 'About Page',
        layout: 'layouts/main'
    });
});

app.get('/contact', (request, response) => {
    const contacts = loadContact();
    response.render('contact', {
        title: 'Contact Page',
        layout: 'layouts/main',
        contacts
    });
});

app.use('/', (request, response) => {
    response.status(404);
    response.send(`<h1>404</h1>`);
});

app.listen(port, () => {
    console.log(`Example App is listening to port ${port}`);
});