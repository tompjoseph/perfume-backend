import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
    profileImg: {
      type: String,
      default:
        "https://st4.depositphotos.com/3864435/27060/i/450/depositphotos_270605520-stock-photo-default-avatar-profile-icon-grey.jpg",
    },
  },
  { timestamps: true }
);

export const Admin = mongoose.model("Admin", adminSchema);
