import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";

const ProductCard = ({ product }) => {
  const { carts, setCarts, setSelectedProduct } = useContext(ProductContext);

  // ✅ Add to cart logic
  const addToCart = () => {
    setCarts([...carts, { ...product, quantity: 1 }]);
  };

  return (
    <div
      className="rounded-lg p-3 bg-white border border-gray-200 shadow hover:shadow-2xl cursor-pointer transition-all"
      onClick={() => setSelectedProduct(product)} // 👈 open detail modal
    >
      {/* Image */}
      <div className="w-full h-[250px] overflow-hidden">
        <img
          className="w-full h-full object-cover transition-all hover:scale-105"
          src={product.image}
          alt={product.name}
        />
      </div>

      {/* Title + description */}
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm my-1 text-gray-500 line-clamp-1">
        {product.description}
      </p>

      {/* Rating */}
      <div className="text-yellow-500 flex items-center gap-1">
        <i className="bx bxs-star text-lg"></i>
        <i className="bx bxs-star text-lg"></i>
        <i className="bx bxs-star text-lg"></i>
        <i className="bx bxs-star text-lg"></i>
        <i className="bx bx-star text-lg"></i>
        <span className="text-black">(356)</span>
      </div>

      {/* Price + Category */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl my-2 font-semibold text-yellow-600">
          ${product.price}
        </h3>
        <span className="text-xs bg-slate-200 py-1 px-2 rounded-sm">
          {product.category}
        </span>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // ✅ prevent opening detail modal when clicking button
          addToCart();
        }}
        className="rounded-md bg-purple-950 w-full text-white flex items-center justify-center gap-5 py-2 hover:bg-purple-900 cursor-pointer"
      >
        <i className="bx bx-cart text-xl"></i>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
