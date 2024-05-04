import express from "express";
import UserRouter from "./user.router.js";
import BookRouter from "./book.router.js";

const router = express.Router();
router.use("/user", UserRouter);
router.use("/book", BookRouter);

export default router;
