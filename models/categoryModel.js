import mongoose from "mongoose";

const categorySchema = new mongoose.model({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  gender: {
    name: String,
    enum: ["male", "female", "unisex"],
    default: "male",
  },
  size: {
    name: String,
    enum: ["50ml", "75ml", "100ml"],
    default: "50ml",
  },
}, { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema)