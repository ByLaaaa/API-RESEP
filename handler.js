const { Food } = require('./Food');

const getAllMenu = (req, res) => {
    res.status(200);
    res.send({
        status: "success",
        data: {Food},
    })
}

// const getRecipesForRecipespage = () => ({
//     status: "success",
//     data: { Food },
// });

module.exports = {
    getAllMenu,
    // getRecipesForRecipespage,
};