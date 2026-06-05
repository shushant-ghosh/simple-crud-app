// Product Model for validation
import { Product } from "../models/product.model.js";

// Create
const createProduct = async(req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

// Read 
const getAllProducts = async(req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}

const getProductById = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Update
const updateProductById = async(req,res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body,{ new: true })

        if(!product) return res.status(404).json({message:"Product Not Found"})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Delete
const deleteProductById = async(req,res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)

        if(!product) return res.status(404).json({message:"Product Not Found"})
        res.status(200).json({message:"Product deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};

export default ProductController