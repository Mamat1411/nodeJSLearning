const express = require('express');
const app = express();
const port = 3000;

//using EJS
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (request, response) => {
    response.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (request, response) => {
    response.sendFile('./contact.html', { root: __dirname });
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