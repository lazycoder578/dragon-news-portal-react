import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LeftSideNav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-9">
      <h2 className="text-2xl">All category</h2>
      {categories.map((category) => (
        <Link
          className="block ml-4 text-xl font-semibold"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
