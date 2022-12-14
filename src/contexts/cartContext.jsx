import React, { useState } from "react";
import { createContext } from "react";
import api from "../services/api";

import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const navigate = useNavigate();

  const [productsCart, setProductsCart] = useState([]);
  const [formOfPayment, setFormOfPayment] = useState("");

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

  const handlePostItemsCart = async (valueSelect) => {
    try {
      if (productsCart.length === 0) {
        return toast.error('Sacola está vazia, verifique!');
      }

      if (formOfPayment === "") {
        return toast.error('Selecione a forma de Pagamento!');
      }

      const obj = {
        productsCart,
        formOfPayment,
      }

      const response = await api.post('/productsCart', obj);

      if (response.status === 201) {
        setProductsCart([]);
        navigate('/completedOrder');
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
        handlePostItemsCart,
        setFormOfPayment
      }}>
      {children}
    </CartContext.Provider>
  );
}