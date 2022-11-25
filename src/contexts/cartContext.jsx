import React, { useState } from "react";
import { createContext } from "react";
import api from "../services/api";

import { toast } from 'react-toastify';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {

  const [productsCart, setProductsCart] = useState([]);

  const handleAddItemCart = (item) => {
    setProductsCart([...productsCart, item]);
  }

  return (
    <CartContext.Provider
      value={{
        handleAddItemCart,
        productsCart, 
        setProductsCart
      }}>
      {children}
    </CartContext.Provider>
  );
}