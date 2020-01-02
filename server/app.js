const express = require('express')
const app = express();
const port = 3000;
const {contact} = require('./routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/contact', contact);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));