const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();
const port = 3000;

//using EJS
app.set('view engine', 'ejs');

//Third-Party Middleware
//using EJS Layouts Module
app.use(expressLayouts);

//using Morgan Module
app.use(morgan('dev'));


//Built-In Middleware
app.use(express.static('public'));

//Application Level Middleware
app.use((request, response, next) => {
    console.log('Time', Date.now());
    next();
});

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
    response.render('contact', {
        title: 'Contact Page',
        layout: 'layouts/main'
    });
});

app.get('/product/:id', (request, response) => {
    response.send(`Product ID : ${request.params.id} <br> Category : ${request.query.category}`);
});

app.use('/', (request, response) => {
    response.status(404);
    response.send(`<h1>404</h1>`);
});

app.listen(port, () => {
    console.log(`Example App is listening to port ${port}`);
});