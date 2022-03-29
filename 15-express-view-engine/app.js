const express = require('express');
const app = express();
const port = 3000;

//using EJS
app.set('view engine', 'ejs');

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
        employee
    });
});

app.get('/about', (request, response) => {
    response.render('about', { title: 'About Page' });
});

app.get('/contact', (request, response) => {
    response.render('contact', { title: 'Contact Page' });
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