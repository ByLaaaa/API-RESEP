const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 9090;

const Food = require('./Food.js')

// const corsOptions = {
//     origin: 'http://localhost:5173' 
// };


app.use(cors());
app.use(express.json())

app.listen(
    PORT,
    () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    }
);

app.get('/food',  (req, res) => {
    // req.setHeader('Access-Controll-Allow-Origin', '*');
    // res.json(Food);

    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

    // // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    res.json(Food);

});