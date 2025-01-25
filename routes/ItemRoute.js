import express from "express";
import {
  createItem,
  editItem,
  getAllItems,
  getItemByIdOrName,
  getItemsByCategory,
  getItemsBySubCategory,
  searchItemByName,
} from "../controllers/ItemController.js";

const router = express.Router();

// Create a new item
router.post("/item", createItem);

// Get all items
router.get("/all", getAllItems);

// Get items by category or sub-category
router.get("/category/:id", getItemsByCategory);
router.get("/subcategory/:id", getItemsBySubCategory);

// Get a specific item by ID or name
router.get("/item", getItemByIdOrName);

// Edit an item by ID
router.put("/item/:id", editItem);

// Search items by name
router.get("/search", searchItemByName);

export default router;
