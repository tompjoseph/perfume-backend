import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  perfumeId: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
  },
}, { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
