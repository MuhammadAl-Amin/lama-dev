import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      maxlength: 60,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    image: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);


const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 60,
    },
    
    image: {
      type: String,
    },
    userId: {
      type: String,
      required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
      },
  },
  { timestamps: true }
);


export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export const User = mongoose.models.User || mongoose.model("User", userSchema);

