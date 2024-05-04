import express from "express";
import * as dotenv from "dotenv";
import ConnectDB from "./database/db.js";
import authenToken from "./auth/authorization.js";
import pdf2html from "pdf2html";
import router from "./router/index.js";
import cors from "cors";
const app = express();
dotenv.config();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());
app.use("/api/v1", router);
app.listen(port, async () => {
  await ConnectDB();
  console.log("Server running on port", port);
});
