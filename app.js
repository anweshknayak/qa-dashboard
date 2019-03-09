const express = require('express');
const bodyParser = require('body-parser');

const test = require('./routes/testcase.route'); // Imports routes for the products
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/testcase', test);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
