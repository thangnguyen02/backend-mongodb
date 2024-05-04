import express from "express";
import BookController from "../controller/book.controller.js";

const BookRouter = express.Router();

BookRouter.get("/", BookController.getAll);
BookRouter.post("/", BookController.createOne);
BookRouter.get("/year/:id", BookController.getAllAfterYear);
BookRouter.get("/author/:name", BookController.getByAuthor);
BookRouter.get("/title/:regex", BookController.getByTitleStartWith);
BookRouter.put("/updateYear/:id", BookController.updateYear);
BookRouter.put("/updateAuthor/:id", BookController.updateAuthor);
BookRouter.delete("/:title", BookController.deleteOne);

export default BookRouter;
