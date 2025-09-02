import React, { useState, useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";
import ProductDetailModal from "./ProductDetailModal";
import ProductCard from "./ProductCard"; // ✅ Import your styled ProductCard

const Shop = () => {
  const { products, addToCart } = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} onClick={() => setSelectedProduct(product)}>
          {/* ✅ Use the same styled ProductCard */}
          <ProductCard product={product} />
        </div>
      ))}

      {/* ✅ Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Shop;
