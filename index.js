const express       = require('express');
const app           = express();
const cors          = require('cors');
var dal             = require('./dal.js');

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    // else create user
    dal.create(req.params.name, req.params.email, req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

/*
// login user
app.get('/account/login/:email/:password', function (req, res) {
    res.send({
        email:      req.params.email,
        password:   req.params.password
    });
});
*/
// deposit funds DID THIS ON MY OWN BUT DIDN'T TEST FUNCTIONALITY
app.get('/account/deposit/:email/:amount', function (req, res) {
    dal.create(req.params.email, req.params.amount).
        then((user) => {
            console.log(user); // NOT SURE ON THIS LINE
            res.send(user); // NOT SURE ON THIS LINE
        });
});
/*
// withdraw funds
app.get('/account/withdraw/:email/:amount', function (req, res) {
    res.send({
        email:      req.params.email,
        amount:     req.params.amount
    });
});

// see account balance
app.get('/account/balance/:email', function (req, res) {
    res.send({
        email:      req.params.email
    });
});
*/

// all accounts
app.get('/account/all', function (req, res) {
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

const port = 3000;
app.listen(port);
console.log('Running on port: ' + port);