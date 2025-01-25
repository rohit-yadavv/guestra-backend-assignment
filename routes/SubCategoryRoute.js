import express from "express";
import {
  createSubCategory,
  editSubCategory,
  getAllSubCategories,
  getSubCategoriesByCategory,
  getSubCategoryByIdOrName,
} from "../controllers/SubCategoryController.js";

const router = express.Router();

// Create subcategory
router.post("/subcategory", createSubCategory);

// Get all subcategories
router.get("/all", getAllSubCategories);

// Get subcategories by category ID
router.get("/category/:categoryId", getSubCategoriesByCategory);

// Get subcategory by ID or name
router.get("/subcategory", getSubCategoryByIdOrName);

// Edit subcategory by ID
router.put("/subcategory/:id", editSubCategory);

export default router;
