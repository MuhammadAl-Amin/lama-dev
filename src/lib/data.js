// const users = [
//   { id: 1, name: "john" },
//   { id: 2, name: "jane" },
//   { id: 3, name: "jack" },
//   { id: 4, name: "jill" },
// ];

import { Post, User } from "./models";
import { connectToDb } from "./utils";

// const posts = [
//   { id: 1, title: "Post 1", body: "Body 1", userId: 1 },
//   { id: 2, title: "Post 2", body: "Body 2", userId: 2 },
//   { id: 3, title: "Post 3", body: "Body 3", userId: 3 },
//   { id: 4, title: "Post 4", body: "Body 4", userId: 4 },
// ];

export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find()
    return posts
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getPost = async (slug) => {
    try {
        connectToDb()
        const post = await Post.find({slug})
        return post
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
};

export const getUser = async (id) => {
    try {
        connectToDb()
        const user = await User.findById(id)
        return user
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
};

export const getUsers = async () => {
    try {
        connectToDb()
        const users = await User.find()
        return users
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
};
