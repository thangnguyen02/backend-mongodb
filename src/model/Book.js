import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
const Book = mongoose.model(
  "books",
  new Schema({
    title: String,
    author: String,
    year: Number,
  })
);
export default Book;
