import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
const User = mongoose.model(
  "user",
  new Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    token: String,
  })
);
export default User;
