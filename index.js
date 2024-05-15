const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

const Food = require('./Food.js');
const routes = require("./routes.js");

app.use(cors());
app.use(express.json())
app.use("/api", routes)

app.listen(
    port,
    () => {
        console.log(`Server is running on port`, port);
    }
);

app.use((err, res) => {
    console.error(err.stack);
    res.status(500).json({message: 'Something broke!'});
});

module.exports = app;