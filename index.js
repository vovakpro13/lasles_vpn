const express = require('express');
const path = require('path');

const index = path.join(__dirname, 'public', 'index.html')

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', ((req, res) => {
    res.sendFile(index);
}));

app.listen(process.env.PORT || 3000);