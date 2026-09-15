import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required!"],
      trim: true,
      minlength: [2, "Product name must be at least 2 characters long"]
    },
    price: {
      type: Number,
      required: [true, "Product price is required!"],
      min: [0, "Product price cannot be negative"]
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, "Product stock cannot be negative"]
    }
  },
  { timestamps: true, versionKey: false }
);

export const Product = mongoose.model("Product", productSchema);