import Item from "../models/Item.js";

// Centralized error handling function
const handleError = (res, error, message = "An error occurred") => {
  console.error(error);
  res.status(400).json({ error: message, details: error.message });
};

// Create a new item
export const createItem = async (req, res) => {
  const {
    name,
    image,
    description,
    tax_applicability,
    tax,
    base_amount,
    discount,
    sub_category,
    category,
  } = req.body;
  try {
    const item = new Item({
      name,
      image,
      description,
      tax_applicability,
      tax,
      base_amount,
      discount,
      sub_category,
      category,
    });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    handleError(res, error);
  }
};

// Get all items
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    handleError(res, error);
  }
};

// Get all items under a category
export const getItemsByCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const items = await Item.find({ category: id });
    res.status(200).json(items);
  } catch (error) {
    handleError(res, error);
  }
};

// Get all items under a sub-category
export const getItemsBySubCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const items = await Item.find({ sub_category: id });
    res.status(200).json(items);
  } catch (error) {
    handleError(res, error);
  }
};

// Get item by ID or name
export const getItemByIdOrName = async (req, res) => {
  const { id, name } = req.query;
  try {
    const item = id ? await Item.findById(id) : await Item.findOne({ name });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    handleError(res, error);
  }
};

// Edit item attributes
export const editItem = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const item = await Item.findByIdAndUpdate(id, updates, { new: true });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    handleError(res, error);
  }
};

// Search items by name
export const searchItemByName = async (req, res) => {
  const { name } = req.query;
  try {
    const items = await Item.find({ name: { $regex: name, $options: "i" } });
    res.status(200).json(items);
  } catch (error) {
    handleError(res, error);
  }
};
