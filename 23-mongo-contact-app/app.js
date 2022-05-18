const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));

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

app.listen(port, () => {
    console.log(`Mongo Contact App is listening to http://localhost:${port}`);
});