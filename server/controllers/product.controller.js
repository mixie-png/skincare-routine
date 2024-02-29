import Product from "../models/product.model.js";

async function getAllProducts(req, res) {
    try {
        const allProducts = await Product.find().populate('routine');
        res.json(allProducts);
    } catch (error) {
        console.log(error);
        res.status(400).json(error); 
    }
}

export {
    getAllProducts,
}