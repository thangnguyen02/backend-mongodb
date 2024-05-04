import Book from "../model/Book.js";
import HandleError from "../common/HandleError.js";
const BookRepository = {
  getAll: async (req, res, next) => {
    try {
      return await Book.find().exec();
    } catch (error) {
      throw new Error(error);
    }
  },
  getAllAfterYear: async (req, res, next) => {
    try {
      const { id } = req.params;

      return await Book.find({ year: { $gt: id } });
    } catch (error) {
      throw new Error(error);
    }
  },
  getByAuthor: async (req, res, next) => {
    try {
      const { name } = req.params;

      return await Book.find({ author: name });
    } catch (error) {
      throw new Error(error);
    }
  },
  getByTitleStartWith: async (req, res, next) => {
    try {
      const { regex } = req.params;
      return await Book.find({ title: new RegExp("^" + regex) });
    } catch (error) {
      throw new Error(error);
    }
  },
  createOne: async (req, res) => {
    try {
      const { title, author, year } = req.body;
      return await Book.create({ title, author, year });
    } catch (error) {
      throw new HandleError(500, "Server Error");
    }
  },
  updateYear: async (req, res) => {
    try {
      const { id } = req.params;
      const { year } = req.body;
      const data = await Book.findOne({ _id: id });
      if (!data) return res.json({ status: 404, message: "Book not found" });
      data.year = year;
      await data.save();
      return data;
    } catch (error) {
      throw new HandleError(500, "Server Error");
    }
  },
  updateAuthor: async (req, res) => {
    try {
      const { id } = req.params;
      const { author } = req.body;
      const data = await Book.findOne({ _id: id });
      if (!data) return res.json({ status: 404, message: "Book not found" });
      data.author = author;
      await data.save();
      return data;
    } catch (error) {
      throw new HandleError(500, "Server Error");
    }
  },
  deleteOne: async (req, res) => {
    try {
      const { title } = req.params;
      return await Book.deleteOne({ title });
    } catch (error) {
      throw new HandleError(500, "Server Error");
    }
  },
};
export default BookRepository;
