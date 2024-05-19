const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const Food = require('./API/Food.js');

app.use(cors()); // Mengizinkan semua origin
app.use(express.json());

app.use('/img', express.static(path.join(__dirname, 'public', 'img')));

app.get('/Food', (req, res) => {
    res.json(Food);
});

app.get('/img/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const image = path.join(__dirname, 'public', 'img', imageName);

    res.sendFile(image, (err) => {
        if (err) {
            console.log(err);
            res.status(404).send('Not Found');
        }
    });
});

app.get('/', (req, res) => {
    res.send('Welcome to API');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
