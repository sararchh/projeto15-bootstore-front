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

  const handlePostItemsCart = async () => {
    try {
      if (productsCart.length === 0) {
        return toast.error('Sacola está vazia, verifique!');
      }

      const response = await api.post('/productsCart', productsCart);
    
      if(response.status === 201) {
        setProductsCart([]);
      }

    } catch (error) {
      toast.error('Erro ao salvar sacola!');
    }
  }

  return (
    <CartContext.Provider
      value={{
        handleAddItemCart,
        productsCart,
        setProductsCart,
        handlePostItemsCart
      }}>
      {children}
    </CartContext.Provider>
  );
}