import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavbarMain, NLink } from './navbar.style.js';

export const Navbar = () => {
  return (
    <>
      <NavbarMain>
        <NLink to="/">Home</NLink>
        <NLink to="/movies">Movies</NLink>
      </NavbarMain>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
