import React, { useState } from "react";
import { createContext } from "react";
import api from "../services/api";

import { toast } from 'react-toastify';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {

  const [productsCart, setProductsCart] = useState([]);

  const handleAddItemCart = (item) => {
    const alreadyExists = productsCart.filter((i) => i.id === item.id)[0];

    let updateCart;
    if (alreadyExists) {
      const restant = productsCart.filter((i) => i.id !== item.id);
      updateCart = [
        ...restant,
        { ...alreadyExists, qtd: alreadyExists.qtd + 1, subtotal: (Number(alreadyExists?.price) * (alreadyExists.qtd + 1)) }
      ]
    } else {
      updateCart = [
        ...productsCart,
        { ...item, qtd: 1, subtotal: (Number(item?.price) * 1) }
      ]
    }

    setProductsCart(updateCart);
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