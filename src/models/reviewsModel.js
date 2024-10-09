import mongoose from "mongoose";

const reviewSchema = new mongoose.model({
    userId: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    }],
    perfumeId: [{
        type: mongoose.Types.ObjectId,
        ref: "Product",
    }],
    rating: {
        type: number,
        required: true,
    },
    review: {
        type: String,
        required: true,
        minLength: 15,
        maxLength: 250,
    },
  },
  { timestamps: true }
);
  
export const Review = mongoose.model("Review", reviewSchema)