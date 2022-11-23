import React from "react";
import { createContext } from "react";
import api from "../services/api";

import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const navigate = useNavigate();

  return (
    <UserContext.Provider
      value={{
     
      }}>
      {children}
    </UserContext.Provider>
  );
}