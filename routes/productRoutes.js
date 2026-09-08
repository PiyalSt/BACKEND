import express from "express";
import { createProduct, searchProduct } from "../controllers/productControllers.js";
const router = express.Router();

router.post("/product", createProduct);
router.post("/product/search", searchProduct);

export default router;
