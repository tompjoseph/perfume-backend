import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },

    products: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        price: {
          type: Number,
          required: true
        },
      }
    ],
    totalPrice: {
      type: Number,
      required: true,
      default: 0
    }
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
