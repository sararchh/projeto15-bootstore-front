import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyles';
import RoutesApp from './routes';
import { UserContextProvider } from './contexts/userContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContextProvider } from './contexts/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <CartContextProvider>
        <UserContextProvider>
          <RoutesApp />
        </UserContextProvider>
      </CartContextProvider>
    </BrowserRouter>
    <ToastContainer />
  </>
);
