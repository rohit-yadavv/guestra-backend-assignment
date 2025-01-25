import express from "express";
import {
  createCategory,
  editCategory,
  getAllCategories,
  getCategoryByIdOrName,
} from "../controllers/CategoryController.js";

const router = express.Router();

// Create category
router.post("/category", createCategory);

// Get all categories
router.get("/all", getAllCategories);

// Get category by ID or name
router.get("/category", getCategoryByIdOrName);

// Edit category by ID
router.put("/category/:id", editCategory);

export default router;
