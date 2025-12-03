import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Footer = lazy(() => import('../Footer/Footer'));

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Outlet will render the current page component */}
        <Outlet />
      </main>
      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
