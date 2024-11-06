const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
})

app.get('/product', (req, res) => {
    res.sendFile(__dirname + '/views/product.html');
})


app.listen(process.argv[2], () => {
    console.log(`Server started on port 8050`);
})