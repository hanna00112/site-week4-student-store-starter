
const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // used for JSON file 

app.get("/", (req, res) => {
    res.send("Hello World!")
}
)

const products = [
    {id: 1, name: "College Hoodie", description: "green soft hoodie", price: 29.99, image_url: "#", category: "clothing"}, 
    {id: 2, name: "Algebra Textbook", description: "book used for Algebra 101", price: 59.99, image_url: "#", category: "books"},
    {id: 3, name: "College Notebook", description: "100 page notebook", price: 6.99, image_url: "#", category: "books"}
]
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

app.listen (port, () => {
    console.log(`Server is running at http://localhost:${port}!`);
})




