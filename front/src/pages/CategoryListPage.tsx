import { useState } from "react";
import CategoryList from "../components/CategoryList";
import { CategoryType } from "../types/category.type";
import { findAllCat } from "../services/travel.service";

const CategoryListPage = () => {
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);

  const fetchCategories = async () => {
    try {
      const categories = await findAllCat();
      setCategoryList(categories);
    } catch (error) {
      console.log("Error to fetch categories", error);
    }
  };
  return (
    <div>
      <h1>Hello Categories</h1>
      <CategoryList
        categoryList={categoryList}
        fetchCategories={fetchCategories}
      />
    </div>
  );
};

export default CategoryListPage;
