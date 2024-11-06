import { useEffect } from "react";
import { CategoryType } from "../types/category.type";

type CategoryListProps = {
  categoryList: CategoryType[];
  fetchCategories: () => void;
};

const CategoryList = ({ categoryList, fetchCategories }: CategoryListProps) => {
  useEffect(() => {
    console.log("test travel list");
    fetchCategories();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4">
      {categoryList.map((category) => (
        <div>
          <p>{category.name}</p>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
