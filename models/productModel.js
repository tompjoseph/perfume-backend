import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female", "unisex"],
        default: "male",
    },
    image: {
        type: String,
        required: true,
    },
    },
    { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
