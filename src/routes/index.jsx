import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Store from '../pages/store';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import Wallet from '../pages/wallet';
import CompletedOrder from '../pages/completedOrder';

const NotFound = () => {
  return (
    <p>Não encontrado</p>
  )
}

function RoutesApp() {
  return (
    <>
      <Routes>

        <Route path='/' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/store' element={<Store />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/completedOrder' element={<CompletedOrder />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesApp;