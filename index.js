const express = require('express');
const app = express();
const PORT = 9090;

const Food = require('./Food.js')

app.use(express.json())

app.listen(
    PORT,
    () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    }
);

app.get('/food',  (req, res) => {
    res.setHeader('Access-Controll-Allow-Origin', '*');
    res.json(Food);
});