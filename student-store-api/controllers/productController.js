// same functions as model but your like calling the ones you made in the model 

const productModel = require("../models/productModels")

/*
Similar function from productModels but also sending a response
try -- if no products in array
*/
const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.getAllProducts();
        res.status(200).json(products)

    } catch (error) {
        res.status(400).json({error: error.message })
    }
}



// export the function
module.exports = {
    getAllProducts,
}