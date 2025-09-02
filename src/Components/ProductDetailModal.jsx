import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductProvider";

const ProductDetailModal = () => {
  const { selectedProduct, setSelectedProduct, carts, setCarts } =
    useContext(ProductContext);

  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct) return null;

  const addToCart = () => {
    setCarts([...carts, { ...selectedProduct, quantity }]);
    setSelectedProduct(null);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999]">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-6 relative flex flex-col md:flex-row gap-6 overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-black text-2xl"
          onClick={() => setSelectedProduct(null)}
        >
          ✕
        </button>

        {/* Left: Product Images */}
        <div className="md:w-1/2 space-y-3">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-64 object-contain rounded-lg"
          />
        </div>

        {/* Right: Product Info */}
        <div className="md:w-1/2">
          {/* Rating */}
          <div className="flex items-center text-yellow-400 text-lg">
            {"⭐".repeat(4)} <span className="text-gray-400 ml-1"> (4.3)</span>
          </div>

          <h2 className="text-2xl font-bold mt-2 text-purple-950">{selectedProduct.name}</h2>
          <p className="text-purple-900 mt-1">{selectedProduct.description}</p>
          <p className="text-pink-500 text-2xl font-semibold mt-2">
            ${selectedProduct.price}
          </p>

          {/* Category Tag */}
          <span className="inline-block bg-gray-100 text-purple-900 text-sm px-3 py-1 rounded-full mt-2">
            {selectedProduct.category || "General"}
          </span>

          {/* Product Details */}
          <div className="mt-4">
            <h3 className="font-semibold text-purple-950">Product Details</h3>
            <ul className="mt-2 text-purple-900 text-sm space-y-1">
              <li className="flex justify-between">
                <span className="font-medium">Brand:</span>{" "}
                {selectedProduct.brand || "N/A"}
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Battery life:</span>{" "}
                {selectedProduct.battery_life || "N/A"}
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Material:</span>{" "}
                {selectedProduct.material || "N/A"}
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Connectivity:</span>{" "}
                {selectedProduct.connectivity || "N/A"}
              </li>
            </ul>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mt-4">
            <span className="mr-3 font-medium text-purple-950">Quantity:</span>
            <button
              className="px-3 py-1 border rounded-l disabled:opacity-50 text-purple-900"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              −
            </button>
            <span className="px-4 py-1 border-t border-b  text-purple-900">{quantity}</span>
            <button
              className="px-3 py-1 border rounded-r text-purple-900"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            className="mt-6 w-full bg-purple-950 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-900 transition"
          >
            🛒 Add {quantity} to Cart – ${(
              selectedProduct.price * quantity
            ).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
