// CRUD functions 
/*
const products = [
    {id: 1, name: "College Hoodie", description: "green soft hoodie", price: 29.99, image_url: "#", category: "clothing"}, 
    {id: 2, name: "Algebra Textbook", description: "book used for Algebra 101", price: 59.99, image_url: "#", category: "books"},
    {id: 3, name: "College Notebook", description: "100 page notebook", price: 6.99, image_url: "#", category: "books"}
]
*/

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function gets all the cars
const getAllProducts = async (filter = {}, orderBy = {}) => {
    return prisma.car.findMany({
      where: filter,
      orderBy: orderBy,
    });
  };
  


//const getProductById 

//exporting that function
module.exports = {
    getAllProducts,
}