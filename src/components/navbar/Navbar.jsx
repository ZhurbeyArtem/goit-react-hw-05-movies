import React, { Suspense } from 'react';
import { NavbarMain, NLink } from './navbar.style.js';
import { Outlet } from 'react-router-dom';

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
