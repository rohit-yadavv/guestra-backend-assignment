import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
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
      required: true,
    },
    tax: {
      type: Number,
      required: function () {
        return this.tax_applicability;
      },
    },
    tax_type: {
      type: String,
      required: function () {
        return this.tax_applicability;
      },
    },
  },
  { timestamps: true }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
