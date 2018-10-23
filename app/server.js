const express = require('express');
const bodyparser = require('body-parser')
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/home.html')))

app.listen(3006, () => console.log('http://localhost:3006'));