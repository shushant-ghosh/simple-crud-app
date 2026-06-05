import mongoose, { model } from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true,"Please enter the product name"],
    },
    quantity: {
      type: Number,
      required: [true,"Please enter the product quantity"],
    },
    price: {
      type: Number,
      required: [true,"Please enter the product price"],
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", ProductSchema);

export {
    Product,
}
