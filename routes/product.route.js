import express from "express";
import ProductController from "../controllers/product.controller.js";

// Segregating Product Controllers
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = ProductController;

const router = express.Router();

// Defining and assigning routes to controllers
// Create
router.post("/", createProduct);

// Read
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Update
router.put("/:id", updateProductById)

// Delete
router.delete("/:id", deleteProductById)

export default router