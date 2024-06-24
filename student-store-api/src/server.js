
const express = require('express')
const app = express()
const port = 3000
const productRoutes = require("../routes/productRoutes")

app.use(express.json()) // used for JSON file 

app.get("/", (req, res) => {
    res.send("Hello World! You are currently at the / route")
}
)
app.use("/products", productRoutes) // used to access all products from productRoutes


/*
CODE ADDED ON FRIDAY
// GET products with query parameters
app.get("/products", (req, res) => {
    const { category, sort } = req.query;
    let filteredProducts = [...products]; //creates new array

    // apply filtering by category parameter is provided
    if (category) {
        filteredProducts = filteredProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }

    // apply sorting by price or name based on sort parameter
    // products?sort=price
    if (sort) {
        if (sort === 'price') { // SORTING BY PRICE
            filteredProducts.sort((a,b) => a.price - b.price);
        }
        else if (sort === 'name') {
            filteredProducts.sort((a,b) => a.name.localeCompare(b.name))
        }
    }
    res.json(filteredProducts);
})
*/ 

app.listen (port, () => {
    console.log(`Server is running at http://localhost:${port}!`);
})




