import { Router } from "express";
import CategoryService from "./category.service";

const CategoryController = Router();

CategoryController.get("/", CategoryService.getAll);
CategoryController.post("/", CategoryService.create);
CategoryController.get("/:id", CategoryService.getOne);
CategoryController.get("/:id", CategoryService.update);
CategoryController.get("/:id", CategoryService.remove);

export default CategoryController;
