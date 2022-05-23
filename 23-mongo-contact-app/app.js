const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const { body, validationResult, check } = require('express-validator');

//Connecting to utility/db.js for database connection
require('./utility/db');

//Connection to models
const Contact = require('./models/contact');

const app = express();
const port = 3000;

//EJS Setup
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

//Flash Configuration
app.use(cookieParser('secret'));
app.use(
    session({
        cookie: {maxAge: 6000},
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    })
);
app.use(flash());

//Homepage
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

//About Page
app.get('/about', (request, response) => {
    response.render('about', {
        title: 'About Page',
        layout: 'layouts/main'
    });
});

// Contact Page
app.get('/contact', async (request, response) => {
    const contacts = await Contact.find();
    response.render('contact', {
        title: 'Contact Page',
        layout: 'layouts/main',
        contacts,
        msg : request.flash('msg')
    });
});

// Add Contact Page
app.get('/contact/add', async (request, response) => {
    response.render('addContact', {
        title: 'Add Contact Page',
        layout: 'layouts/main'
    });
});

// Detail Contact Page
app.get('/contact/:name', async (request, response) => {
    const contact = await Contact.findOne({name: request.params.name});

    response.render('detail', {
        title: 'Detail Contact Page',
        layout: 'layouts/main',
        contact
    });
});

app.listen(port, () => {
    console.log(`Mongo Contact App is listening to http://localhost:${port}`);
});