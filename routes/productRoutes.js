import express from "express";
import {
	createProduct,
	deleteProduct,
	getAllProducts,
	getProductById,
	updateProduct
} from "../controllers/productController.js";

const router = express.Router();

// create product
router.post("/", createProduct);

// get all products
router.get("/", getAllProducts);

// find product with id
router.get("/:id", getProductById);

// update single product
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);

export default router;
