const { Food } = require('./Food');

const getAllMenu = () => ({
    status: "success",
    data: { Food },
});

const getRecipesForRecipespage = () => ({
    status: "success",
    data: { Food },
});

module.exports = {
    getAllMenu,
    getRecipesForRecipespage,
};