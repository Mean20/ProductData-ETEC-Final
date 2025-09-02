import React, { createContext, useState} from 'react'
import { products as productData } from './products.js';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);
  const [carts, setCarts] = useState([]);

  const addToCart = (id) => {
    const productToAdd = products.find((pro) => pro.id == id);
    const checkIfAlreadyExist = carts.find((cart) => cart.id == id);

    if(checkIfAlreadyExist == undefined){
      setCarts([...carts, { ...productToAdd, quantity: 1 }]);
    }else{
      setCarts(
        carts.map((pro) => 
          pro.id == id ? { ...pro, quantity: pro.quantity + 1 } : pro
        )
      );
    }
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ProductContext.Provider value={{ products, carts, setCarts, selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );

};

export default ProductProvider
