// import { Router as expressRouter /=} from 'express';

const {getAllMenu} = require('./handler');
const Food = require('./Food');
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200);
    res.send("This is the main page of endpoint");
});

router.get("/getAllMenu", (req, res) => 
    getAllMenu(req, res)
);

// router.get("/getMenu/:Food", (req, res) => {
//     let data = [];
  
//     for (let i = 0; i < Food.length; i++) {
//       if (
//         Food[i].nama.replace(/\s+/g, "-").toLowerCase() ===
//         req.params.Food.replace(/\s+/g, "-").toLowerCase()
//       ) {
//         data.push(Foods[i]);
//       }
//     }
//     res.status(200);
//     res.send({
//       status: "success",
//       data,
//     });
//   });

module.exports = router;