import mongoose from "mongoose";
import Category from "./Category.js";

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tax_applicability: {
      type: Boolean,
      default: false,
    },
    tax: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

// Pre-save hook to set default taxApplicability and tax based on the parent category
subCategorySchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      const category = await Category.findById(this.category).select(
        "tax_applicability tax"
      );
      if (category) {
        this.tax_applicability = category.tax_applicability;
        this.tax = category.tax;
      }
    } catch (error) {
      return next(error);
    }
  }
  next();
});

const SubCategory = mongoose.model("SubCategory", subCategorySchema);

export default SubCategory;
