import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
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
      trim: true,
    },
    tax_applicability: {
      type: Boolean,
      default: false,
    },
    tax: {
      type: Number,
      default: 0,
      validate: {
        validator: (value) => value >= 0,
        message: "Tax must be a non-negative number.",
      },
    },
    base_amount: {
      type: Number,
      required: true,
      validate: {
        validator: (value) => value >= 0,
        message: "Base amount must be a non-negative number.",
      },
    },
    discount: {
      type: Number,
      default: 0,
      validate: {
        validator: (value) => value >= 0,
        message: "Discount must be a non-negative number.",
      },
    },
    total_amount: {
      type: Number,
    },
    sub_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

// pre-hook to calculate the total amount
itemSchema.pre("save", function (next) {
  const discountAmount = this.base_amount - this.discount;
  const taxAmount = this.tax_applicability
    ? (discountAmount * this.tax) / 100
    : 0;
  this.total_amount = discountAmount + taxAmount;
  next();
});

export default mongoose.model("Item", itemSchema);
