import BookRepository from "../repository/book.repository.js";
import HandleError from "../common/HandleError.js";
const BookController = {
  getAll: async (req, res, next) => {
    try {
      const data = await BookRepository.getAll(req, res, next);

      return res.json({ data, message: "OK" });
    } catch (error) {
      // return res
      //   .status(error.status)
      //   .json({ status: error.status, message: error.message });
      console.log(error);
    }
  },
  getAllAfterYear: async (req, res, next) => {
    try {
      const data = await BookRepository.getAllAfterYear(req, res, next);

      return res.json({ data, message: "OK" });
    } catch (error) {
      // return res
      //   .status(error.status)
      //   .json({ status: error.status, message: error.message });
      console.log(error);
    }
  },
  getByAuthor: async (req, res, next) => {
    try {
      const data = await BookRepository.getByAuthor(req, res, next);

      return res.json({ data, message: "OK" });
    } catch (error) {
      // return res
      //   .status(error.status)
      //   .json({ status: error.status, message: error.message });
      console.log(error);
    }
  },
  getByTitleStartWith: async (req, res, next) => {
    try {
      const data = await BookRepository.getByTitleStartWith(req, res, next);

      return res.json({ data, message: "OK" });
    } catch (error) {
      // return res
      //   .status(error.status)
      //   .json({ status: error.status, message: error.message });
      console.log(error);
    }
  },
  createOne: async (req, res, next) => {
    try {
      const data = await BookRepository.createOne(req, res);
      return res.json({ data, message: "Create OK" });
    } catch (error) {
      // return res
      //   .status(error.status)
      //   .json({ status: error.status, message: error.message });
      console.log(error);
    }
  },
  updateYear: async (req, res, next) => {
    try {
      const data = await BookRepository.updateYear(req, res);
      return res.json({ data, message: "Update OK" });
    } catch (error) {
      // return res
      //   .status(error.status)
      //   .json({ status: error.status, message: error.message });
      console.log(error);
    }
  },
  updateAuthor: async (req, res, next) => {
    try {
      const data = await BookRepository.updateAuthor(req, res);
      return res.json({ data, message: "Update OK" });
    } catch (error) {
      // return res
      //   .status(error.status)
      //   .json({ status: error.status, message: error.message });
      console.log(error);
    }
  },
  deleteOne: async (req, res, next) => {
    try {
      const data = await BookRepository.deleteOne(req, res);
      return res.json({ data, message: "Delete OK" });
    } catch (error) {
      // return res
      //   .status(error.status)
      //   .json({ status: error.status, message: error.message });
      console.log(error);
    }
  },
};
export default BookController;
