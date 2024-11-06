import express, { Request, Response } from "express";
import cors from "cors";
import { ResultSetHeader } from "mysql2";
import CommentController from "./comment/comment.controller";
import connection from "./config/database.config";
import TravelController from "./travel/travel.controller";
import CategoryController from "./category/category.controller";

const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Connection to the mysql database

app.use("/comments", CommentController);
app.use("/travels", TravelController);
app.use("/categories", CategoryController);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello !");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
