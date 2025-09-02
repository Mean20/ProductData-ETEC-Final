import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductProvider";
import ProductCard from "./ProductCard";

const Product = () => {
  const { products } = useContext(ProductContext);
  const [activeCategory, setActiveCategory] = useState("All");

  // ✅ Get unique categories (including "All")
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // ✅ Filter products by activeCategory
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      <div className="w-[1200px] m-auto">
        {/* ✅ Category Buttons */}
        <div className="flex gap-5 flex-wrap">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`text-lg px-5 py-2 border rounded-md cursor-pointer ${
                activeCategory === cat
                  ? "bg-purple-950 text-white border-black"
                  : "hover:bg-slate-200 border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ✅ Products Grid */}
        <div className="grid grid-cols-4 gap-5 mt-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {/* Show message if no products */}
          {filteredProducts.length === 0 && (
            <p className="text-gray-500 col-span-4">
              No products in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
