import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 50,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
      maxLength: 30,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 5,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    profilepic: {
      type: String,
      default: "https://st4.depositphotos.com/3864435/27060/i/450/depositphotos_270605520-stock-photo-default-avatar-profile-icon-grey.jpg",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);