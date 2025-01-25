import SubCategory from "../models/SubCategory.js";

// Handle errors in one place
const handleError = (res, error, message = "An error At SubCategory") => {
  console.error(error);
  res.status(400).json({ error: message, details: error.message });
};

// Create a sub-category
export const createSubCategory = async (req, res) => {
  const { name, image, description, tax_applicability, tax, category } =
    req.body;
  try {
    const subCategory = new SubCategory({
      name,
      image,
      description,
      tax_applicability,
      tax,
      category,
    });
    await subCategory.save();
    res.status(201).json(subCategory);
  } catch (error) {
    handleError(res, error, "Error creating sub-category");
  }
};

// Get all sub-categories
export const getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    res.status(200).json(subCategories);
  } catch (error) {
    handleError(res, error, "Error fetching all sub-categories");
  }
};

// Get sub-categories by category ID
export const getSubCategoriesByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const subCategories = await SubCategory.find({ category: categoryId });
    res.status(200).json(subCategories);
  } catch (error) {
    handleError(res, error, "Error fetching sub-categories by category");
  }
};

// Get sub-category by ID or name
export const getSubCategoryByIdOrName = async (req, res) => {
  const { id, name } = req.query;
  try {
    const subCategory = id
      ? await SubCategory.findById(id)
      : await SubCategory.findOne({ name });

    if (!subCategory)
      return res.status(404).json({ message: "SubCategory not found" });
    res.status(200).json(subCategory);
  } catch (error) {
    handleError(res, error, "Error fetching sub-category by ID or name");
  }
};

// Edit sub-category attributes
export const editSubCategory = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!subCategory)
      return res.status(404).json({ message: "SubCategory not found" });
    res.status(200).json(subCategory);
  } catch (error) {
    handleError(res, error, "Error editing sub-category");
  }
};
