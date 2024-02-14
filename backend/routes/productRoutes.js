import express from "express";
const router = express.Router();

//product controller
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";

//middleware for protected routes
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProductById).put(protect, admin, updateProduct);

export default router;
