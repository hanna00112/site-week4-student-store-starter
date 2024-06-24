// CRUD functions 

const products = [
    {id: 1, name: "College Hoodie", description: "green soft hoodie", price: 29.99, image_url: "#", category: "clothing"}, 
    {id: 2, name: "Algebra Textbook", description: "book used for Algebra 101", price: 59.99, image_url: "#", category: "books"},
    {id: 3, name: "College Notebook", description: "100 page notebook", price: 6.99, image_url: "#", category: "books"}
]

// function to get all products 
const getAllProducts = async () => {
    return products; 
}

const getProductById 

//exporting that function
module.exports = {
    getAllProducts,
}