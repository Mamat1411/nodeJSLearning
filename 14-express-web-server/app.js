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

// const http = require('http');
// const fs = require('fs');
// const port = 3000;

// const renderHTML = (path, response) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             response.writeHead(404);
//             response.write('Error: File Not Found');
//         } else {
//             response.write(data);
//         }
//         response.end();
//     });
// };

// http
//     .createServer((request, response) => {
//         response.writeHead(200,{
//             'Content-Type' : 'text,html'
//         });
//         const url = request.url;
//         switch (url) {
//             case '/about':
//                 renderHTML('./about.html', response);
//                 break;
//             case '/contact':
//                 renderHTML('./contact.html', response);
//                 break;
                
//             default:
//                 renderHTML('./index.html', response);
//                 break;
//         }
//         // if (url === '/about') {
//         //     // response.write(`<h1>This is About Page</h1>`);
//         //     // response.end();
//         //     // fs.readFile('./about.html', (err, data) => {
//         //     //     if (err) {
//         //     //         response.writeHead(404);
//         //     //         response.write('Error: File Not Found');
//         //     //     } else {
//         //     //         response.write(data);
//         //     //     }
//         //     //     response.end();
//         //     // });
//         //     renderHTML('./about.html', response);
//         // } else if (url === '/contact') {
//         //     // response.write(`<h1>This is Contact Page</h1>`);
//         //     // response.end();
//         //     renderHTML('./contact.html', response);
//         // } else {
//         //     // response.write('Hello World!');
//         //     // fs.readFile('./index.html', (err, data) => {
//         //     //     if (err) {
//         //     //         response.writeHead(404);
//         //     //         response.write('Error: File Not Found');
//         //     //     } else {
//         //     //         response.write(data);
//         //     //     }
//         //     //     response.end();
//         //     // });
//         //     renderHTML('./index.html', response);
//         // }
//     })
//     .listen(port, () => {
//         console.log(`Server is listening on port ${port}`);
//     });