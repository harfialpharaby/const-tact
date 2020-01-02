const express = require('express')
const app = express();
const port = 3000;
const {contact} = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/contact', contact);
app.use('/', function(req, res, next) {
    res.json({message: 'server is alive'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));