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
    res.json(Food);

});