const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    // response.send('Hello World');
    // response.json({
    //     name : 'Muhammad',
    //     email: 'muhammad@gmail.com',
    //     phoneNumber : '081913036646'
    // });
    response.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (request, response) => {
    // response.send('This is About Page');
    response.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (request, response) => {
    // response.send('This is Contact Page');
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