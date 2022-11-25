import React, { useState } from "react";
import { createContext } from "react";
import api from "../services/api";

import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const navigate = useNavigate();

  const [userCreated, setUserCreated] = useState();
  const [token, setToken] = useState();

  const handleSignUp = async ({ email, name, password }) => {
    const obj = {
      email,
      name,
      password
    }

    try {
      const { data } = await api.post('/sign-up', obj);
      setUserCreated(data);
      setToken(data.token);

      localStorage.setItem('token', data.token);
      navigate('/store');

    } catch (error) {
      toast.error('Usuário já existe!')
    }
  }

  const handleSignIn = async ({ email, password }) => {
    try {
      const obj = { email, password };

      const { data } = await api.post('/sign-in', obj);
      setUserCreated(data);
      setToken(data.token);

      localStorage.setItem('token', data.token);
      navigate('/store');
    } catch (error) {
      toast.error('Usuário não encontrado!')
    }
  }

  const handleLogoutAccount = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <UserContext.Provider
      value={{
        userCreated,
        token,
        handleSignUp,
        handleSignIn,
        handleLogoutAccount
      }}>
      {children}
    </UserContext.Provider>
  );
}